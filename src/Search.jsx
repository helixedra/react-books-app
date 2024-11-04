import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import { useState } from "react";
import booksData from "./books.json";
import { Link } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchDialog, setSearchDialog] = useState(false);

  function handleSearch(input) {
    const searchQuery = input.target.value;
    setSearch(searchQuery);

    // console.log(searchQuery.length);

    if (searchQuery.length > 2) {
      //   const searchQuery = input.target.value;

      //   console.log(searchQuery);

      const searchedData = booksData.filter((item) => {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchQuery)
        );
      });
      //   console.log(searchedData);
      setSearchResult(searchedData);
      setSearchDialog(true);
    } else {
      setSearchResult(null);
      setSearchDialog(false);
    }
  }

  function handleSearchDialog() {
    setSearchDialog(!searchDialog);
    setSearch("");
  }
  return (
    <>
      <div className="search_container">
        <div className="search">
          <input
            value={search}
            onChange={(e) => handleSearch(e)}
            placeholder="Search for books..."
          />
          <FontAwesomeIcon icon={faSearch} className="search_icon" />
          <FontAwesomeIcon
            icon={faXmark}
            className={
              searchDialog ? "close_search_icon" : "close_search_icon hide"
            }
            onClick={() => handleSearchDialog()}
          />
        </div>
        <div className={searchDialog ? "search_dialog" : "search_dialog hide"}>
          <ul>
            {searchResult &&
              searchResult.map((item) => {
                return (
                  <>
                    <li key={item.id}>
                      <Link
                        onClick={() => handleSearchDialog()}
                        key={item.id}
                        to={`/books/${item.category.toLowerCase()}/${item.id}`}
                      >
                        <div className="cover_small">
                          <img src={item.cover} alt="" />
                        </div>
                        <div className="info_small">
                          <div className="title_small">{item.title}</div>
                          <div>{item.author}</div>
                          <div>
                            {item.category} / {item.genre}
                          </div>
                        </div>
                      </Link>
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
