import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";
import { currentlyReading, noAssigned, read, wantToRead } from "../tools";

const Book = ({book, onChangeCategory}) =>
{
    const [category, setCategory] = useState(noAssigned);

    const categories = [noAssigned, read, currentlyReading, wantToRead];

    const handleCategoryChange = (e) =>
    {
        e.preventDefault();
        setCategory(e.target.value);
        console.log(book.id + " set to " + e.target.value + " / " + category)
        onChangeCategory(book.id, e.target.value);
    };

    return (
        <div key={book.id}>
            <h5>{book.title}</h5>
            <img src={book.imageLinks["thumbnail"]} alt={book.title} />
            <p>{book.authors.join(", ")}</p>
            <select value={category} onChange={handleCategoryChange}>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeCategory: PropTypes.func.isRequired
};

export default Book;