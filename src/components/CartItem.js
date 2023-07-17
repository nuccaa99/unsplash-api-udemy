import React from "react";


const CartItem = ({ item, removeFromCart, toggleFavorite }) => {

    function heartIcon() {
        if (item.isFavorite) {
            return <i className="fa-solid fa-heart" style={{ color: '#FF5C5C' }} onClick={() => { toggleFavorite(item.id) }}></i>
        } else {
            return <i className="fa-solid fa-heart" style={{ color: '#D9A7A7' }} onClick={() => { toggleFavorite(item.id) }}></i>
        }
    }
    return (
        <div className="cart--item--container">
            <div className="cart--fav--remove">
                <i className="fa-solid fa-x" style={{ color: '#8F9491' }} onClick={() => { removeFromCart(item.id) }}></i>
                {heartIcon()}
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