import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ searchText, onSearchTextChange }) {
  function inputText(text, onTextChange) {
    return (
      <label
        htmlFor="searchText"
        data-testid="text-input-label"
        className="label"
      >
        Inclui o texto
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={text}
          onChange={onTextChange}
          data-testid="text-input"
          className="input"
        />
      </label>
    );
  }

  return (
    <form data-testid="search-bar-form" className="form">
      {inputText(searchText, onSearchTextChange)}
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
