import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import BooksPage from "./BooksPage";
import SingleBookPage from "./SingleBookPage";
import SingleCategoryPage from "./SingleCategoryPage";
// import { useState } from "react";
import Player from "./Player";
// import booksData from "./books.json";
import { AudioProvider } from "./AudioPlayerContext";
import { useState, useEffect } from "react";
import Search from "./Search";

function App() {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  useEffect(() => {
    if (menu) {
      document.body.classList.add("no_overflow");
    } else {
      document.body.classList.remove("no_overflow");
    }
  }, [menu]);

  return (
    <AudioProvider>
      <div className={menu ? "wrapper wrapper_menu_open" : "wrapper"}>
        <Router>
          <header>
            <Navbar menuAction={handleMenu} />
          </header>

          <Search />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/wishlist" element={"wishlist"} />
              <Route path="/info" element={"info"} />
              <Route path="/books/:cat" element={<SingleCategoryPage />} />
              <Route path="/books/:cat/:id" element={<SingleBookPage />} />
            </Routes>
          </main>
          <Player />
        </Router>
      </div>
    </AudioProvider>
  );
}

export default App;
