function BookItem({ data: { id, title, cover } }) {
  return (
    <>
      <div className="book_item">
        <a href={`/books/${id}`}>
          <div className="book_cover">
            <img className="book_cover_s" src={cover} alt="" />
          </div>
          <div className="book_title">{title}</div>
        </a>
      </div>
    </>
  );
}

export default BookItem;
