import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';

function PlacesLibrary({ places }) {
  const [city, setCity] = useState('');

  function handleChange({ target }) {
    setCity(target.value);
  }

  function filterplaces(placeList) {
    let placesToRender = '';
    if (city !== '') {
      placesToRender = placeList
        .filter(
          (place) => place.city.includes(city),
          // || place.category.toLowerCase().includes(city)
          // || place.types[0].toLowerCase().includes(city)
          // || place.name.toLowerCase().includes(city)
          // || place.country.toLowerCase().includes(city),
        );
    } else {
      placesToRender = places;
    }

    return placesToRender;
  }

  const placesToRender = filterplaces(places);
  return (
    <div>
      <SearchBar
        data={places}
        cityToRender={city}
        // eslint-disable-next-line react/jsx-no-bind
        onChosedCityToRender={handleChange}
      />
      <PlacesList placeList={placesToRender} />
    </div>
  );
}

PlacesLibrary.propTypes = {
  places: PropTypes.shape({
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

PlacesLibrary.defaultProps = {
  places: PropTypes.shape({
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

export default PlacesLibrary;
