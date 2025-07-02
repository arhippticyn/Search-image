import React from "react";
import ImageGalleryitem from "./ImageGalleryItem";
import styles from "../styles/ImageGallery.module.css"
import Button from "./Button";


class ImageGallery extends React.Component {
    render() {
        const { images } = this.props
        return (
            <ul className={styles.ImageGallery}>
                {images.map(({id, webformatURL}) => (
                    <ImageGalleryitem key={id} id={id} webformatURL={webformatURL} />
                ))}

            </ul>
        )
    }
}

export default ImageGallery