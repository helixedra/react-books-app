import { useParams, Link } from 'react-router-dom';
// import BookItem from "./BookItem";
import BooksData from './books.json';
import AudioItem from './AudioItem';
// import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function SingleBookPage() {
  // Отримуємо параметр id з URL
  const { id } = useParams();

  // Знаходимо книгу з відповідним id
  const book = BooksData.books.find((book) => book.id === parseInt(id));

  // Перевіряємо, чи знайшли ми книгу
  if (!book) {
    return <h2>Книга не знайдена</h2>;
  }

  return (
    <>
      <div className="breadcrumbs">
        <Link to={'/books'}>Books</Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <Link to={'/books/:cat'}>{book.category}</Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        {book.title}
      </div>
      <div className="single_book_item">
        <div className="single_book_item_container">
          <div className="single_book_cover_container">
            <img
              className="single_book_cover"
              src={book.cover}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="single_book_info_container">
            <div className="single_book_title">{book.title}</div>
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
