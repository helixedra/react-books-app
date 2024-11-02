// import { Link } from 'react-router-dom';
import BookItem from "./BookItem";
import booksData from "./books.json";
import { useState } from "react";

function BooksList() {
  const [booksByCategory, setBooksByCategory] = useState(booksData.books);

  function handleSelect(e) {
    const cat = e.target.value;
    if (cat !== "all") {
      const filteredBooks = booksData.books.filter(
        (book) => book.category === cat
      );
      setBooksByCategory(filteredBooks);
    } else {
      setBooksByCategory(booksData.books);
    }
  }

  const categoryCount = booksData.books.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1;
    return acc;
  }, {});
  return (
    <>
      <div className="page_header">
        <div>Books</div>

        <select
          name="categories"
          id="categories"
          onChange={(event) => handleSelect(event)}
        >
          <option value="all">All Categories</option>
          {Object.entries(categoryCount).map(([category, count]) => (
            <option
              key={category}
              value={category}
            >{`${category} (${count})`}</option>
          ))}
        </select>
      </div>
      <div className="books_container">
        {booksByCategory.map((book) => (
          <BookItem data={book} key={book.id} />
        ))}
      </div>
    </>
  );
}

export default BooksList;
