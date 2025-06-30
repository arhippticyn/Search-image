import React from "react";
import ImageGalleryitem from "./ImageGalleryItem";


class ImageGallery extends React.Component {
    render() {
        const { images } = this.props
        return (
            <ul classname="ImageGallery">
                {images.map(({id, webformatURL}) => (
                    <ImageGalleryitem id={id} webformatURL={webformatURL} />
                ))}
            </ul>
        )
    }
}

export default ImageGallery