import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import * as BooksAPI from "./BookAPI.js";
import SearchPage from "./components/SearchPage.js";
import { read, currentlyReading, wantToRead } from "./tools.js";

const App = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() =>
  {
    BooksAPI.getAll().then(books =>
    {
      setBooks(books);
    });
  }, []);

  const handleChangeCategory = (bookId, newCategory) =>
  {
    const book = books
      .filter(b => { return b.id === bookId })
    console.log('will update: ' + JSON.stringify(book) + ' to: ' + newCategory)
    BooksAPI.update(book, newCategory).then(
      setBooks(books
        .map(b =>
        {
          if (b.id === bookId) {
            b["shelf"] = newCategory;
            console.log('force update: ' + JSON.stringify(b))
            return b;
          } else {
            return b;
          }
        }))
    )
  };

  const readBooks = books.filter(book => {
      return book.shelf === read
  })

  const currentlyReadingBooks = books.filter(book => {
      return book.shelf === currentlyReading
  })

  const toReadBooks = books.filter(book => {
      return book.shelf === wantToRead
  })

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePage
            readBooks={readBooks}
            currentlyReadingBooks={currentlyReadingBooks}
            toReadBooks={toReadBooks}
            onChangeCategory={handleChangeCategory}>  
          </HomePage>}
      ></Route>
      <Route
        path="/search"
        element={
          <SearchPage
            books={books}
            onChangeCategory={handleChangeCategory}>
          </SearchPage>}
      ></Route>
    </Routes>
  );
}

export default App;