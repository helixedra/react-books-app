import booksData from "./books.json";
// import Search from "./Search";
import { Link } from "react-router-dom";
import ResponsiveSlider from "./ResponsiveSlider";

function HomePage() {
  const categoryCount = booksData.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <div className="books_slider section">
        <div className="books_slider_header">New Books</div>

        <ResponsiveSlider books={booksData} />
      </div>

      <div className="books_categories section">
        <div className="section_header">Browse By Category</div>
        <div className="books_categories_container">
          {Object.entries(categoryCount).map(([category, count]) => (
            <div key={category} className="category_item">
              <Link to={"/books/" + category.toLowerCase()}>
                {category}
                <span className="category_count">{count}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="books_selected  section">
        <div className="section_header">Most Listened</div>
        <ResponsiveSlider books={booksData} />
      </div>
    </>
  );
}

export default HomePage;
