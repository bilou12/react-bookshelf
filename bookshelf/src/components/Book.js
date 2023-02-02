import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";
import { currentlyReading, noAssigned, read, wantToRead } from "../tools";

const Book = ({book, onChangeCategory}) =>
{
    const [category, setCategory] = useState(noAssigned);

    const categories = [noAssigned, read, currentlyReading, wantToRead];

    const handleCategoryChange = event =>
    {
        setCategory(event.target.value);
        onChangeCategory(book.id, category);
    };

    return (
        <li key={book.id}>
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
        </li>
    )
}

export default Book;