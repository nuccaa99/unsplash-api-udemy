import { React, useState } from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./styles.css"


const App = () => {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term) => {
        const response = await
            axios
                .get('https://api.unsplash.com/search/photos', {
                    params: { query: term },
                    headers: {
                        Authorization: 'Client-ID 0oXlTxMsdJy1xbNFA9Aya4xCIZjU0JNJJGEoho1r9y0'
                    }
                })
        setImages(response.data.results)
    }

    return (
        <div className="container">
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    )


}

export default App;