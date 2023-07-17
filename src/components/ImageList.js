
import React from "react";
import ImageCard from './ImageCard';


const ImageList = ({ images, errorMessage, toggleFavorite, cartItems, addToCart, removeFromCart }) => {
    
    if (errorMessage.length > 0) {
        return (
            <div className="error">Sorry, nothing matched your search terms.</div>
        )
    } else {
        return (
            <div className='image-list'>
                {images.map((img) => {
                    return (
                        <ImageCard key={img.id} image={img} toggleFavorite={toggleFavorite} cartItems={cartItems} addToCart={addToCart}
                            removeFromCart={removeFromCart} />
                    )
                })}
            </div>
        )
    }
};
export default ImageList;