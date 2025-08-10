import React, { useState, useCallback } from "react";
import styles from "../styles/Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(value);
      setValue('');
    },
    [onSubmit, value]
  );

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
