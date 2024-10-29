function CurrentPlay({ current: { fileTitle, bookTitle, bookCover } }) {
  return (
    <>
      <div className={fileTitle ? "floating_window" : "floating_window hide"}>
        <div className="cover">
          <img className="book_cover_xs" src={bookCover} alt="" />
          {bookTitle}
          {fileTitle}
        </div>
      </div>
    </>
  );
}

export default CurrentPlay;
