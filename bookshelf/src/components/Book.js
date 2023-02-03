import React from "react";
import PropTypes from 'prop-types'

const Book = ({book, onChangeCategory}) =>
{   
    const handleCategoryChange = (e) =>
    {
        e.preventDefault();
        const shelf = e.target.value;
        console.log(book.title + " set to " + shelf);
        onChangeCategory(book.id, shelf);
    };

    return (
        <div key={book.id}>
            <h5>{book.title}</h5>
            <img src={book.imageLinks["thumbnail"]} alt={book.title} />
            <p>{book.authors.join(", ")}</p>
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={handleCategoryChange}>
                    <option value='none' disabled>Move to...</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </select>
            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeCategory: PropTypes.func.isRequired
};

export default Book;