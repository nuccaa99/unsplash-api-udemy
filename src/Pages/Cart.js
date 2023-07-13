import { React, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = ({ cartItems, emptyCart }) => {
    const [buttonText, setButtonText] = useState("Place Order")
    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
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
                        <CartItem item={item} key={item.id} />
                    )
                })}
            </div>
            <div className="cart--subtotal">
                <p>Total: {totalCostDisplay}</p>
                <p>{cartItems.length} items</p>
                <div className="cart--button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;