import React from "react";
import PropTypes from 'prop-types'
import { currentlyReading, read, wantToRead, pretty } from "../tools";
import ListBooks from "./ListBooks";

const ListUserBooks = ({books}) =>
{
    return (
        <div>
            <h1>{pretty(currentlyReading)}</h1>
            <ListBooks books={books} categories={[currentlyReading]}></ListBooks>

            <h1>{pretty(wantToRead)}</h1>
            <ListBooks books={books} categories={[wantToRead]}></ListBooks>

            <h1>{pretty(read)}</h1>
            <ListBooks books={books} categories={[read]}></ListBooks>
        </div>
    )
}

export default ListUserBooks;