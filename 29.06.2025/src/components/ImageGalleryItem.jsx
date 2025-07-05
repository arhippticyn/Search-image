import React from "react";
import styles from '../styles/ImageGalleryItem.module.css'
import Modal from "./Modal";


class ImageGalleryitem extends React.Component {
    render() {
        const { id, webformatURL, largeImageURL, onImageClick} = this.props
        return (
            <li key={id} className={styles.ImageGalleryItem} onClick={() => onImageClick(largeImageURL)}>
             <img className={styles.ImageGalleryItemImage} src={webformatURL} alt="image" />
            </li>
        )
    }
}

export default ImageGalleryitem