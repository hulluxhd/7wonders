import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ cityToRender, onChosedCityToRender, data }) {


  return (
    <form data-testid="search-bar-form" className="form">
      {inputCity(cityToRender, onChosedCityToRender, data)}
      <section className="checkin-sec">
        <label htmlFor="checkin" className="checkin-label">
          Check In
          <input
            name="checkin"
            type="date"
          />
        </label>
        <label htmlFor="checkout" className="checkout-label">
          Check Out
          <input
            name="checkout"
            type="date"
          />
        </label>
      </section>
    </form>
  );
}

SearchBar.propTypes = {
  cityToRender: PropTypes.string.isRequired,
  onChosedCityToRender: PropTypes.func.isRequired,
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

SearchBar.defaultProps = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

export default SearchBar;
