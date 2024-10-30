import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import BooksPage from "./BooksPage";
import SingleBookPage from "./SingleBookPage";
// import { useState } from "react";
import Player from "./Player";
// import booksData from "./books.json";
import { AudioProvider } from "./AudioPlayerContext";

function App() {
  // const [currentPlay, setCurrentPlay] = useState(null);

  // // Функція для встановлення аудіофайлу, який буде відтворюватися в Player
  // function getPlayer(bookId, fileId) {
  //   const book = booksData.books.find((book) => book.id === parseInt(bookId));
  //   const file = book?.files?.find((file) => file.id === parseInt(fileId));

  //   if (book && file) {
  //     setCurrentPlay({
  //       fileTitle: file.title,
  //       file: file.file,
  //       bookTitle: book.title,
  //       bookCover: book.cover,
  //     });

  //     // console.log("play");
  //   } else {
  //     console.error("Book or file not found");
  //   }
  // }

  return (
    <AudioProvider>
      <div className="wrapper">
        <Router>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/books/:id" element={<SingleBookPage />} />
            </Routes>
          </main>
          <footer>
            <Player />
          </footer>
        </Router>
      </div>
    </AudioProvider>
  );
}

export default App;
