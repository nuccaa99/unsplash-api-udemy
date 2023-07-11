
import React from "react";
import ImageCard from './ImageCard';


const ImageList = ({ images, errorMessage }) => {
console.log(errorMessage)
    if (errorMessage.length > 0) {
        return (
            <div className="error">Sorry, nothing matched your search terms.</div>
        )
    } else {
        return (

            <div className='image-list'>
                {images.map((img) => {
                    return (
                        <ImageCard key={img.id} image={img} />
                    )
                })}
            </div>
        )
    }
};
export default ImageList;