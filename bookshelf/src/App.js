import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListUserBooks from "./components/ListUserBooks.js";
import ListBooks from "./components/ListBooks.js";
import { getAll } from "./BookAPI.js";
import { noAssigned } from "./tools.js";

const App = () => {
  
  const [books, setBooks] = useState([]);

  const selectedFields = ['id', 'imageLinks', 'title', 'authors', 'category'];

  useEffect(() =>
  {
    getAll().then(books =>
    {
      setBooks(books.map(book =>
      {
        return selectedFields.reduce((obj, field) =>
        {
          if (field in book)
          {
            obj[field] = book[field];
          } else
          {
            obj[field] = noAssigned;
          }
          return obj;
        }, {});
      }));
    });
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ListUserBooks books={books}></ListUserBooks>}
      ></Route>
      <Route
        path="/search"
        element={<ListBooks books={books} categories={[noAssigned]}></ListBooks>}
      ></Route>
    </Routes>
  );
}

export default App;