import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListUserBooks from "./components/ListUserBooks.js";
import { getAll } from "./BookAPI.js";
import { currentlyReading, read, wantToRead } from "./tools.js";
import SearchPage from "./components/SearchPage.js";

const App = () => {
  
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [toReadBooks, setToReadBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);

  useEffect(() =>
  {
    console.log("fetching data from the API");
    getAll().then(books =>
    {
      setBooks(books);
    });
  }, []);

  const handleChangeCategory = (bookId, newCategory) =>
  {
    let book = books.filter(book => {
      return book.id === bookId
    })

    console.log("book: " + JSON.stringify(book))

    if (newCategory === read)
    {
      setReadBooks(readBooks.concat(book));
    }
    else if (newCategory === currentlyReading)
    {
      setCurrentlyReadingBooks(currentlyReadingBooks.concat(book));
    }
    else if (newCategory === wantToRead)
    {
      setToReadBooks(toReadBooks.concat(book));
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListUserBooks
            readBooks={readBooks}
            currentlyReadingBooks={currentlyReadingBooks}
            toReadBooks={toReadBooks}
            onChangeCategory={handleChangeCategory}>  
          </ListUserBooks>}
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