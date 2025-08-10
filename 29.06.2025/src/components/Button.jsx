import React from 'react';
import styles from '../styles/Button.module.css'

const Button = ({ onClick }) => {
    return (
         <div >
            <button onClick={onClick} className={styles.Btn} type="button">Load more</button>
        </div>
    );
}

export default Button