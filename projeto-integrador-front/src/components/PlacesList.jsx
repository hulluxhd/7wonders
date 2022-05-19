import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './PlaceCard';

function PlacesList({ placeList }) {
  return (
    <section className="place-list">
      { placeList
        .map((placeToRender) => <PlaceCard key={placeToRender.title} place={placeToRender} />)}
    </section>
  );
}

export default PlacesList;

PlacesList.propTypes = {
  placeList: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};
