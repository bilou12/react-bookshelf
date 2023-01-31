import React from "react";
import PropTypes from 'prop-types'

const ListBooks = ({ books }) => {
  return (
    <ol>
      {books.map(book => (
        <li key={book.id}>
          <img src={book.imageLinks["thumbnail"]} alt={book.title} />
          <h5>{book.title}</h5>
          <p>{book.authors[0]}</p>
        </li>
      ))}
    </ol>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
};


export default ListBooks;