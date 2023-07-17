import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import HomePage from "../Pages/HomePage";
import Cart from "../Pages/Cart";
import "./styles.css"


const App = () => {
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    const [cartItems, setCartItems] = useState([])

    const onSearchSubmit = async (term) => {
        const response = await
            axios
                .get('https://api.unsplash.com/search/photos', {
                    params: { query: term },
                    headers: {
                        Authorization: 'Client-ID 0oXlTxMsdJy1xbNFA9Aya4xCIZjU0JNJJGEoho1r9y0'
                    }
                })
        if (response.data.results.length > 0) {
            setErrorMessage("")
            setImages(response.data.results)
        } else setErrorMessage("error")

    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    function toggleFavorite(id) {
        const updatedArr = images.map((img) => {
            if (img.id === id) {
                return {
                    ...img, isFavorite: !img.isFavorite
                }
            }
            return img
        })
        setImages(updatedArr)
    }

    return (
        <div className="container">
            <Routes>
                <Route exact path="/" element={
                    <HomePage onSubmit={onSearchSubmit}
                        cartItems={cartItems}
                        images={images}
                        errorMessage={errorMessage}
                        toggleFavorite={toggleFavorite}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart} />
                }>
                </Route>
                <Route path="/cart"
                    element={
                        <Cart
                            emptyCart={emptyCart}
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                        />
                    }>
                </Route>
            </Routes>

        </div>
    )
}

export default App;