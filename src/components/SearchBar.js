import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    return (
        <div className="searchbar--container">
            <form onSubmit={onFormSubmit}>
                <div className="searchbar--form">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        placeholder="search for an image"
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    )
}

export default SearchBar;