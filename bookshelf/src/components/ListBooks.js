import React from "react";
import PropTypes from 'prop-types'
import { noAssigned } from "../tools";
import Book from "./Book";

const ListBooks = ({ books, onChangeCategory }) => {
  return (
    <ol>
      {books
        .map(book => (
          <Book key={book.id} book={book} onChangeCategory={onChangeCategory}></Book>
        ))
      }
    </ol>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};


export default ListBooks;