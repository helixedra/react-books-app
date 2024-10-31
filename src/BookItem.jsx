import { Link } from 'react-router-dom';
function BookItem({ data: { id, title, author, cover } }) {
  return (
    <>
      <div className="book_item">
        <Link to={`/books/${id}`}>
          <div className="book_cover">
            <img className="book_cover_s" src={cover} alt="" loading="lazy" />
          </div>
          <div className="book_title">{title}</div>
          <div className="book_author">{author}</div>
        </Link>
      </div>
    </>
  );
}

export default BookItem;
