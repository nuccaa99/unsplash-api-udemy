import React, { useState, useRef, useEffect } from "react";
import useHover from "../hooks/useHover";

const ImageCard = ({ image, toggleFavorite, cartItems, addToCart, removeFromCart }) => {
    const [hovered, ref] = useHover();
    const [span, setSpan] = useState(0)
    const imageRef = useRef();


    function heartIcon() {
        if (image.isFavorite) {
            return <i className="fa-solid fa-heart" style={{ color: '#FF5C5C' }} onClick={() => { toggleFavorite(image.id) }}></i>
        } else if (hovered) {
            return <i className="fa-solid fa-heart" style={{ color: '#D9A7A7' }} onClick={() => { toggleFavorite(image.id) }}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === image.id);
        if (alreadyInCart) {
            return <i className="fa-solid fa-delete-left" style={{ color: '#ed0c0c' }} onClick={() => removeFromCart(image.id)}></i>
        }
        if (hovered) {
            return <i className="fa-solid fa-circle-plus" style={{ color: '#689711' }} onClick={() => addToCart(image)}></i>
        }
    }


    const setSpans = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        setSpan(spans);
    }

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans)

    }, [])

    const { description, urls } = image;
    return (
        <div style={{ gridRowEnd: `span ${span}` }} ref={ref} className="image--container">
            <img
                ref={imageRef}
                alt={description}
                src={urls.regular}
            />
            {heartIcon()}
            {cartIcon()}
        </div>
    )

}

export default ImageCard;