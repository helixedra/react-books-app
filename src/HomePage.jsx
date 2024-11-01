import booksData from './books.json';
import BookItem from './BookItem';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [slider, setSlider] = useState(0);
  const [search, setSearch] = useState('');
  const bookRef = useRef(null);
  const containerRef = useRef(null);

  function handleSlider(direction) {
    const slideWidth = bookRef.current
      ? +bookRef.current.getBoundingClientRect().width
      : 0;

    setSlider((prevSlider) => {
      if (direction === 'prev' && prevSlider > 0) {
        return prevSlider - slideWidth;
      } else if (direction === 'next') {
        return prevSlider + slideWidth;
      }
      return prevSlider;
    });
  }

  // Координати для визначення свайпу
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  }

  function handleSwipe() {
    const slideWidth = bookRef.current
      ? +bookRef.current.getBoundingClientRect().width
      : 0;
    console.log(slideWidth);
    if (touchEndX < touchStartX) {
      console.log(slider);

      // Свайп вліво
      setSlider((prevSlider) => prevSlider + slideWidth);
    }

    if (touchEndX > touchStartX) {
      console.log(slider);
      // Свайп вправо
      setSlider((prevSlider) => prevSlider - slideWidth);
    }
  }

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for books..."
          />
        </div>
      </div>
      <div className="books_slider">
        <div className="books_slider_header">New Books</div>
        <div className="books_slider_wrapper">
          <div
            className="books_slider_container"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${slider}px)` }}>
            {booksData.books.map(
              (book, index) =>
                index < 10 && (
                  <BookItem ref={bookRef} data={book} key={book.id} />
                )
            )}
          </div>
        </div>
        <div className="books_slider_controls">
          <button
            onClick={() => handleSlider('prev')}
            className="slider_button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => handleSlider('next')}
            className="slider_button">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="books_slider_indicator"></div>
      </div>
      <div className="books_categories">
        <div className="books_categories_header">Browse By Category</div>
        <div className="books_categories_container">Categories</div>
      </div>
      <div className="books_selected">
        <div className="books_categories_header">Most Listened</div>
        <div className="books_categories_container">Categories</div>
      </div>
    </>
  );
}

export default HomePage;
