import React, { useState } from "react";
import { Link } from "react-router-dom";


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
                <Link to="/cart"><i className="fa-solid fa-cart-shopping" ></i></Link>
            }
        </div>
    )
}

export default SearchBar;