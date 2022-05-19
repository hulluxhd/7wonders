import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function PlaceCard({ place }) {
  return (
    <section className="place-card">
      <img className="place-card-image" src={place.imagePath} alt={place.name} />
      <section className="place-card-body">
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4 className="place-card-name">{place.name}</h4>
      <Rating rating={place.rating} />
        </header>
        <h5 className="place-card-types">{place.types[0]}</h5>
        <p className="place-card-about">{place.about}</p>
      </section>
    </section>
  );
}

export default PlaceCard;

PlaceCard.propTypes = {
  place: PropTypes.shape({
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

PlaceCard.defaultProps = {
  place: PropTypes.shape({
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
