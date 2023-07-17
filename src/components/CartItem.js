import React from "react";

const CartItem = ({ item, removeFromCart }) => {

    return (
        <div className="cart--item--container">
            <div className="cart--fav--remove">
                <i className="fa-solid fa-x" style={{ color: '#8F9491' }} onClick={() => { removeFromCart(item.id) }}></i>
            </div>
            <img
                className="cart--item--image"
                alt={item.description}
                src={item.urls.regular}
            />
            <div>
                <p className="cart--item-desc">{item.description}</p>
            </div>
            <div className="cart--item--price">$5.99</div>
        </div>
    )
}

export default CartItem;