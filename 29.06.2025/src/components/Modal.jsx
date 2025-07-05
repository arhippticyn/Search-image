import React from 'react';
import styles from '../styles/Modal.module.css'

export default class Modal extends React.Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    } 

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }


    handleKeyDown = (e) => {
        if(e.code === 'Escape') {
            this.props.onClose()
        }
    }


    handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
        }
    }


    render() {

        const { image } = this.props
        return (
<div className={styles.overlay} onClick={this.handleOverlayClick}>
  <div className={styles.modal}>
    <img src={image} alt="" />
  </div>
</div>

        );
    }
}