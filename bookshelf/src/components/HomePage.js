import React from "react";
import PropTypes from 'prop-types'
import { read, wantToRead, currentlyReading, pretty } from "../tools";
import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";

const HomePage = ({readBooks, currentlyReadingBooks, toReadBooks, onChangeCategory}) =>
{
    console.log('readBooks: ' + JSON.stringify(readBooks.map(book => {return book.title})))
    console.log('currentlyReadingBooks: ' + JSON.stringify(currentlyReadingBooks.map(book => {return book.title})))
    console.log('toReadBooks: ' + JSON.stringify(toReadBooks.map(book => {return book.title})))

    return (
        <div>
            <div>
                <Link to="/search" className="add-book">
                    Search Book
                </Link>
            </div>
            <div className="list-books-title">My Read</div>
            <div>
                <h1>{pretty(read)}</h1>
                {readBooks.length !== 0 && (
                    <ListBooks
                        books={readBooks}
                        onChangeCategory={onChangeCategory}>
                    </ListBooks>
                )}

                <h1>{pretty(currentlyReading)}</h1>
                {currentlyReadingBooks.length !== 0 && (
                    <ListBooks
                        books={currentlyReadingBooks}
                        onChangeCategory={onChangeCategory}>
                    </ListBooks>
                )}

                <h1>{pretty(wantToRead)}</h1>
                {toReadBooks.length !== 0 && (
                    <ListBooks
                        books={toReadBooks}
                        onChangeCategory={onChangeCategory}>
                    </ListBooks>
                )}
            </div>
        </div>
    )
}

HomePage.propTypes = {
    readBooks: PropTypes.array.isRequired,
    currentlyReadingBooks: PropTypes.array.isRequired,
    toReadBooks: PropTypes.array.isRequired,
    onChangeCategory: PropTypes.func.isRequired
};

export default HomePage;