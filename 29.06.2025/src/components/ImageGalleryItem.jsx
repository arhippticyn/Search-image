import React from "react";
import styles from '../styles/ImageGalleryItem.module.css'
import Modal from "./Modal";


class ImageGalleryitem extends React.Component {
    render() {
        const { id, webformatURL} = this.props
        return (
            <li key={id} className={styles.ImageGalleryItem}>
             <img className={styles.ImageGalleryItemImage} src={webformatURL} alt="image" />
             <Modal image={webformatURL} />
            </li>
        )
    }
}

export default ImageGalleryitem