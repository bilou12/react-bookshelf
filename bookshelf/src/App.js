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
    if (newCategory === read)
    {
      setReadBooks(
        books.filter(book =>
        {
          return (book.id === bookId);
        })
      )
    } else if (newCategory === currentlyReading)
    {
      setCurrentlyReadingBooks(
        books.map(book => {
        if (book.id === bookId)
        {
          console.log("set to currentlyReading" + book)
          return { ...currentlyReadingBooks, book };
        }
      })
      )
    } else if (newCategory === wantToRead)
    {
      setToReadBooks(
        books.map(book => {
        if (book.id === bookId)
        {
          console.log("set to read" + book)
          return { ...toReadBooks, book };
        }
      })
      )
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
        element={<SearchPage books={books} onChangeCategory={handleChangeCategory}></SearchPage>}
      ></Route>
    </Routes>
  );
}

export default App;