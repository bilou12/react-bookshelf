import React from "react";
import PropTypes from 'prop-types'
import { read, wantToRead, currentlyReading, pretty } from "../tools";
import ListBooks from "./ListBooks";

const ListUserBooks = ({readBooks, currentlyReadingBooks, toReadBooks, onChangeCategory}) =>
{

    return (
        <div>
            <h1>{pretty(read)}</h1>
            <ListBooks
                books={ readBooks }
                onChangeCategory={onChangeCategory}>
            </ListBooks>

            <h1>{pretty(currentlyReading)}</h1>
            <ListBooks
                books={ currentlyReadingBooks }
                onChangeCategory={onChangeCategory}>
            </ListBooks>

            <h1>{pretty(wantToRead)}</h1>
            <ListBooks
                books={ toReadBooks }
                onChangeCategory={onChangeCategory}>
            </ListBooks>
        </div>
    )
}

ListBooks.propTypes = {
    readBooks: PropTypes.array.isRequired,
    currentlyReadingBooks: PropTypes.array.isRequired,
    toReadBooks: PropTypes.array.isRequired,
    onChangeCategory: PropTypes.func.isRequired
};

export default ListUserBooks;