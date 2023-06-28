import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
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
