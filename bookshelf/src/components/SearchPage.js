import React, { useState } from "react";
import PropTypes from 'prop-types'
import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";

const SearchPage = ({books, onChangeCategory}) =>
{
    const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());
    };

    const clearQuery = () => {
        updateQuery("");
    };

    const showingBooks =
        query === ""
        ? books
        : books.filter((c) =>
            c.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <Link className="close-search-book" to="/">
                Close
            </Link>

            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                />
                {showingBooks.length !== books.length && (
                    <div>
                        <span>
                            Now showing {showingBooks.length} of {books.length}
                        </span>
                        <ListBooks books={showingBooks} onChangeCategory={onChangeCategory}></ListBooks>
                        <button onClick={clearQuery}>Show all</button>
                    </div>
                )}
                {showingBooks.length === books.length && (
                    <ListBooks books={books} onChangeCategory={onChangeCategory}></ListBooks>
                )}

            </div>
        </div>

  );

}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};

export default SearchPage;