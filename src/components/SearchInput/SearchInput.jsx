import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './SearchInput.module.css';
export const SearchInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleChage = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className={css.SearchInputContainer}>
      <form onSubmit={handleSubmit}>
        <button className={css.SearchButton} type="submit">
          <span>Search</span>
        </button>
        <input
          className={css.SearchInput}
          id={nanoid()}
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search movies"
          onChange={handleChage}
        />
      </form>
    </div>
  );
};
SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
