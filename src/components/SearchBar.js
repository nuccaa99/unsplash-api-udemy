import React, { useState } from "react";


const SearchBar = ({ onSubmit, cartItems }) => {
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
            {cartItems.length === 0 &&
                <i className="fa-solid fa-cart-shopping" style={{ color: '#757d8a' }}></i>
            }
            {cartItems.length > 0 &&
                <a href="./cart"><i className="fa-solid fa-cart-shopping" ></i></a>
            }
        </div>
    )
}

export default SearchBar;