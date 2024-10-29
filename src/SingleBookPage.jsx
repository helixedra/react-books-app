import { useParams, Link } from "react-router-dom";
// import BookItem from "./BookItem";
import BooksData from "./books.json";
import AudioItem from "./AudioItem";
// import { render } from "react-dom";

function SingleBookPage({ play }) {
  // Отримуємо параметр id з URL
  const { id } = useParams();

  // Знаходимо книгу з відповідним id
  const book = BooksData.books.find((book) => book.id === parseInt(id));

  // Перевіряємо, чи знайшли ми книгу
  if (!book) {
    return <h2>Книга не знайдена</h2>;
  }

  // Рендеримо компонент BookItem з даними знайденої книги

  return (
    <>
      <div className="breadcrumbs">
        <Link to={"/books"}>Books</Link>
        <span>&#129122;</span>
        {book.title}
      </div>
      <div className="book_item">
        <h2>{book.title}</h2>
        <div className="book_cover">
          <img className="book_cover_xl" src={book.cover} alt="" />
        </div>
        <div className="audio_files_container">
          {book.files.map((audio) => (
            <AudioItem
              audio={audio}
              key={audio.title}
              play={play}
              book={book.title}
              bookCover={book.cover}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleBookPage;
