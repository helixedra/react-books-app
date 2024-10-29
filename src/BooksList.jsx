import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import booksData from "./books.json";

function BooksList() {
  //   const books = [
  //     {
  //       id: 1,
  //       title:
  //         "Alice in Wonderland: The Original 1865 Edition With Complete Illustrations By Sir John Tenniel",
  //       file: "book_title/chpt_1.mp3",
  //       cover: "covers/71O1It5N1VS.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "The Mystery of Cloomber. (1889) By: Arthur Conan Doyle",
  //       file: "book_title/chpt_1.mp3",
  //       cover: "covers/1000_QL80_.jpg",
  //     },
  //     {
  //       id: 3,
  //       title: "Book 3",
  //       file: "book_title/chpt_1.mp3",
  //       cover: "covers/71O1It5N1VS.jpg",
  //     },
  //     {
  //       id: 4,
  //       title: "Book 4",
  //       file: "book_title/chpt_1.mp3",
  //       cover: "covers/71O1It5N1VS.jpg",
  //     },
  //   ];

  return (
    <>
      <div className="books_container">
        {booksData.books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <BookItem data={book} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default BooksList;
