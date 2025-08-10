import React, {useCallback, useEffect} from 'react';
import styles from '../styles/Modal.module.css'

const Modal = ({ image, onClose }) => {
 
    const handleKeyDown = useCallback((e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal