import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import { useState } from "react";
import booksData from "./books.json";

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

      const searchedData = booksData.books.filter((item) => {
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
        </div>
        <div className={searchDialog ? "search_dialog" : "search_dialog hide"}>
          <ul>
            {searchResult &&
              searchResult.map((item) => {
                return (
                  <>
                    <li key={item.id}>
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
