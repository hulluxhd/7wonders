import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ cityToRender, onChosedCityToRender, data }) {
  function inputCity(city, onChosedCity, options) {
    return (
      <label
        htmlFor="city"
        data-testid="city-input-label"
        className="city-label"
      >
        Chose a city
        <select
          name="city"
          id="city"
          value={city}
          onChange={onChosedCity}
          data-testid="city-input"
          className="input"
        >
          {options.map((item) => <option value={item.city}>{item.city}</option>)}
        </select>
      </label>
    );
  }

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
