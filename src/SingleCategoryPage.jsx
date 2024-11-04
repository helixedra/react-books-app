import { useParams, Link } from "react-router-dom";
import BookItem from "./BookItem";
import booksData from "./books.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

function SingleCategoryPage() {
  const { cat } = useParams();

  const booksByCategory = booksData.filter(
    (book) => book.category.toLowerCase() === cat
  );

  return (
    <>
      <div className="container">
        <Search />
      </div>
      <div className="breadcrumbs">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <Link to={"/books"}>Books</Link>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <span className="title_case">{cat}</span>
      </div>
      <div className="page_header">
        <span className="title_case">
          {cat} {booksByCategory.length}
        </span>
      </div>
      <div className="books_container">
        {booksByCategory.map((book) => (
          <BookItem data={book} key={book.id} />
        ))}
      </div>
    </>
  );
}

export default SingleCategoryPage;
