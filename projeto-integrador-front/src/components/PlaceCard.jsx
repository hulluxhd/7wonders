import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function PlaceCard({ place }) {
  function seeMore(target) {
    const increaseView = target.parentNode.parentNode;
    increaseView.style.width = '500px';
    increaseView.style.position = 'absolute';
    increaseView.style.margin = '0 auto';
    increaseView.style.zIndex = '999999';
  }
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
        <button type="button" className="see-more" onClick={(ev) => seeMore(ev.target)}>See more</button>
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
