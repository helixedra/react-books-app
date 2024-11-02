import { Link } from "react-router-dom";
import { forwardRef } from "react";

const BookItem = forwardRef(
  ({ data: { id, title, author, cover, category } }, ref) => {
    return (
      <div className="book_item" ref={ref}>
        <Link to={`/books/${category.toLowerCase()}/${id}`}>
          <div className="book_cover">
            <img className="book_cover_s" src={cover} alt="" loading="lazy" />
          </div>
          <div className="book_title">{title}</div>
          <div className="book_author">{author}</div>
        </Link>
      </div>
    );
  }
);
BookItem.displayName = "BookItem";
export default BookItem;
