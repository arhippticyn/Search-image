import React from "react";
import ImageGalleryitem from "./ImageGalleryItem";
import styles from "../styles/ImageGallery.module.css"
import Button from "./Button";


class ImageGallery extends React.Component {
    render() {
        const { images, onImageClick } = this.props
        return (
            <ul className={styles.ImageGallery}>
                {images.map(({id, webformatURL, largeImageURL}) => (
                    <ImageGalleryitem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onImageClick={onImageClick}/>
                ))}

            </ul>
        )
    }
}

export default ImageGallery