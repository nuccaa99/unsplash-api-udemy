import React from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";


const HomePage = ({ onSubmit, cartItems, images, errorMessage, toggleFavorite, addToCart, removeFromCart }) => {
    return (
        <>
            <SearchBar onSubmit={onSubmit} cartItems={cartItems} />
            <ImageList cartItems={cartItems} images={images} errorMessage={errorMessage} toggleFavorite={toggleFavorite} addToCart={addToCart} removeFromCart={removeFromCart} />
        </>
    )
}

export default HomePage;