import React from "react";


class ImageGalleryitem extends React.Component {
    render() {
        const { id, webformatURL} = this.props
        return (
            <li key={id} className='ImageGalleryItem'>
             <img className="ImageGalleryItem-image" src={webformatURL} alt="image" />
            </li>
        )
    }
}

export default ImageGalleryitem