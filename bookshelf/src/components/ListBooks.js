import React from "react";
import PropTypes from 'prop-types'
import Book from "./Book";

const ListBooks = ({ books, onChangeCategory }) =>
{  
  return (
    <div>
      {books.length !== 0 && (
      <ol>
        {books
            .map(book => (
              <Book
                key={book.id}
                book={book}
                onChangeCategory={onChangeCategory}>  
              </Book>
          ))
        }
      </ol>
      )}
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};


export default ListBooks;