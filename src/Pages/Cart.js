import { React, useState } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, emptyCart, removeFromCart, toggleFavorite }) => {
    const [buttonText, setButtonText] = useState("Place Order")
    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    return (
        <div>
            <header className="header--container">
                <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
                <h3>Shopping Cart</h3>
                <h5 className="header--remove" onClick={emptyCart}>Remove all</h5>
            </header>
            <div className="cart--content--container">
                {cartItems.map((item) => {
                    return (
                        <CartItem item={item} key={item.id} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />
                    )
                })}
            </div>
            <div className="cart--subtotal">
                <span className="cart--sub--total">Total: {totalCostDisplay}</span>
                <span className="cart--sub--quantity">{cartItems.length} items</span>
                <button className="cart--button" onClick={placeOrder}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Cart;