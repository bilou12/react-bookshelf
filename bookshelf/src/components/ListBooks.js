import React from "react";
import PropTypes from 'prop-types'

const ListBooks = ({ books, categories }) => {
  return (
    <ol>
      {books
        .filter(book => { return categories.includes(book.category) })
        .map(book => (
          <li key={book.id}>
            <h5>{book.title}</h5>
            <img src={book.imageLinks["thumbnail"]} alt={book.title} />
            <p>{book.authors.join(", ")}</p>
          </li>
      ))}
    </ol>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};


export default ListBooks;