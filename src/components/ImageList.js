
import React from "react";
import ImageCard from './ImageCard';


const ImageList = ({ images }) => {

    return (
        <div className='image-list'>
            {images.map((img) => {
                return (
                    <ImageCard key={img.id} image={img} />
                )
            })}
        </div>
    )

};
export default ImageList;