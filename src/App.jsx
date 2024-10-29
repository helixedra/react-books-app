// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect } from "react";
import "./App.css";
// import BookItem from "./BookItem";
// import BooksList from "./BooksList";
// import * from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import BooksPage from "./BooksPage";
import SingleBookPage from "./SingleBookPage";
import CurrentPlay from "./CurrentPlay";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //   // .then((json) => console.log(json));
  //   // console.log(response);
  // }, []);

  const [currentPlay, setCurrentPlay] = useState("none");

  function getCurrentPlay(title, book, bookCover) {
    return setCurrentPlay({
      fileTitle: title,
      bookTitle: book,
      bookCover: bookCover,
    });
    // alert();
  }

  return (
    <>
      {/* <a href="/">Home</a> */}

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route
            path="/books/:id"
            element={<SingleBookPage play={getCurrentPlay} />}
          />
        </Routes>
        <div className="space"></div>
        <CurrentPlay current={currentPlay} />
      </Router>
    </>
  );
}

export default App;
