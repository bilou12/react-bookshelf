import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListUserBooks from "./components/ListUserBooks.js";
import ListBooks from "./components/ListBooks.js";
import { getAll } from "./BookAPI.js";

const App = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then(books => {setBooks(books);});
  }, []);

  /*
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListUserBooks books={books} />} />
      </Routes>
    </Router>
  );
  */

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ListBooks books={books}></ListBooks>}
      ></Route>
      <Route
        path="/search"
        element={<ListUserBooks books={books}></ListUserBooks>}
      ></Route>
    </Routes>
  );
}

export default App;