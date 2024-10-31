function HomePage() {
  return (
    <>
      <div className="container">
        <div className="search">
          <input type="search" value />
        </div>
        <div className="books_slider">
          <div className="books_slider_header">New Books</div>
          <div className="books_slider_container">SLIDER</div>
        </div>
        <div className="books_categories">
          <div className="books_categories_header">Browse By Category</div>
          <div className="books_categories_container">Categories</div>
        </div>
        <div className="books_selected">
          <div className="books_categories_header">Most Listened</div>
          <div className="books_categories_container">Categories</div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
