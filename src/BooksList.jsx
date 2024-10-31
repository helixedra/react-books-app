// import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import booksData from './books.json';

function BooksList() {
  return (
    <>
      <div className="books_container">
        {booksData.books.map((book) => (
          <BookItem data={book} key={book.id} />
        ))}
      </div>
    </>
  );
}

export default BooksList;
