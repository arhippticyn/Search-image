import React from "react";
import styles from '../styles/ImageGalleryItem.module.css'


const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onImageClick}) => {
    return (
        <li key={id} className={styles.ImageGalleryItem} onClick={() => onImageClick(largeImageURL)}>
            <img className={styles.ImageGalleryItemImage} src={webformatURL} alt="image" />
        </li>
    )
}

export default ImageGalleryItem