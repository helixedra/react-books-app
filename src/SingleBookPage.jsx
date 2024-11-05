import { useParams, Link } from "react-router-dom";
// import BookItem from "./BookItem";
import BooksData from "./books.json";
import AudioItem from "./AudioItem";
// import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouse,
  faStar,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
// import Search from "./Search";
import { useState } from "react";

function SingleBookPage() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Отримуємо параметр id з URL
  const { id } = useParams();

  // Знаходимо книгу з відповідним id
  const book = BooksData.find((book) => book.id === parseInt(id));

  // Перевіряємо, чи знайшли ми книгу
  if (!book) {
    return <h2>Книга не знайдена</h2>;
  }

  function handleBookmark(id) {
    console.log(`${id} - Added to Bookmarks`);
    setIsBookmarked(!isBookmarked);
  }

  return (
    <>
      <div className="breadcrumbs">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <Link to={"/books"}>Books</Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <Link to={"/books/" + book.category.toLowerCase()}>
          {book.category}
        </Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        {book.title}
      </div>
      <div className="single_book_item">
        <div className="single_book_item_container">
          <div className="single_book_cover_container">
            {isBookmarked && (
              <FontAwesomeIcon icon={faBookmark} className="bookmark_big" />
            )}
            <img
              className="single_book_cover"
              src={book.cover}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="single_book_info_container">
            <div className="single_book_title">{book.title}</div>
            <button onClick={() => handleBookmark(book.id)}>
              <FontAwesomeIcon icon={faBookmark} />{" "}
              {!isBookmarked ? "Add to Bookmarks" : "Remove from Bookmarks"}
            </button>
            <div className="single_book_author">
              <span className="info_label">Author</span>
              {book.author}
            </div>
            <div className="single_book_genre">
              <span className="info_label">Genre</span>
              {book.genre}
            </div>
            <div className="single_book_category">
              <span className="info_label">Category</span>
              {book.category}
            </div>
            <div className="single_book_language">
              <span className="info_label">Language</span>
              {book.language}
            </div>
            <div className="single_book_description">
              <span className="info_label">Description</span>
              {book.description}
            </div>

            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  className={
                    index < book.rating ? "rating_star_active" : "rating_star"
                  }
                />
              ))}
            </div>
            <div className="audio_files_container">
              <div className="audio_files_header">Playlist</div>
              {book.files.map((audio) => (
                <AudioItem
                  audio={audio}
                  key={audio.title}
                  id={audio.id}
                  book={book.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBookPage;
