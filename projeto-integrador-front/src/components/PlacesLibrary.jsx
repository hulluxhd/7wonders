import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';

function PlacesLibrary({ places }) {
  const [searchText, setSearchText] = useState('');

  function handleChange({ target }) {
    setSearchText(target.value);
  }

  function filterplaces(placeList) {
    let placesToRender = '';
    if (searchText !== '') {
      placesToRender = placeList
        .filter(
          (place) => place.category.toLowerCase().includes(searchText)
          || place.city.toLowerCase().includes(searchText)
          // || place.types[0].toLowerCase().includes(searchText)
          || place.name.toLowerCase().includes(searchText)
          || place.country.toLowerCase().includes(searchText),
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
        searchText={searchText}
        // eslint-disable-next-line react/jsx-no-bind
        onSearchTextChange={handleChange}
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
