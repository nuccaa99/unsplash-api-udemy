import React, { useState, useRef, useEffect } from "react";

const ImageCard = ({ image }) => {

    const [span, setSpan] = useState(0)
    const imageRef = useRef();


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
        <div style={{ gridRowEnd: `span ${span}` }}>
            <img
                ref={imageRef}
                alt={description}
                src={urls.regular}
            />
        </div>
    )

}

export default ImageCard;