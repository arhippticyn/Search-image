import React from "react";
import styles from '../styles/ImageGalleryItem.module.css'


class ImageGalleryitem extends React.Component {
    render() {
        const { id, webformatURL} = this.props
        return (
            <li key={id} className={styles.ImageGalleryItem}>
             <img className={styles.ImageGalleryItemImage} src={webformatURL} alt="image" />
            </li>
        )
    }
}

export default ImageGalleryitem