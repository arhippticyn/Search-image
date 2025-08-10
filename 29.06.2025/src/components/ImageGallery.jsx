import React from "react";
import ImageGalleryitem from "./ImageGalleryItem";
import styles from "../styles/ImageGallery.module.css"


const ImageGallery = ({ images, onImageClick}) => {
    return (
        <ul className={styles.ImageGallery}>
            {images.map(({id, webformatURL, largeImageURL}) => (
                <ImageGalleryitem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onImageClick={onImageClick}/>
            ))}
        </ul>
    )
}

export default ImageGallery