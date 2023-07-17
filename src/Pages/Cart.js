import { React, useState } from "react";
import CartItem from "../components/CartItem";

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
                <h3>Shopping Cart</h3>
                <h5>Remove all</h5>
            </header>
            <div className="cart--content--container">
                {cartItems.map((item) => {
                    return (
                        <CartItem item={item} key={item.id} removeFromCart={removeFromCart} />
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