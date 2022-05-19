import React, {
//  useEffect,
// useState,
} from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function PlaceCard({ place }) {
  // const [seeMore, setSeeMore] = useState(false);

  // useEffect(() => {}, [seeMore]);

  // function increaseDiv(target) {
  //   const increase = document.getElementById('increase');
  //   const increaseView = target.parentNode.parentNode;
  //   if (seeMore === false) {
  //     setSeeMore(true);
  //     increaseView.id = 'increase';
  //     increase.style.width = '500px';
  //     // increase.style.top = '30%';
  //     increase.style.position = 'absolute';
  //     // increase.style.margin = '0 auto';
  //     increase.style.zIndex = '999999';
  //   } else {
  //     setSeeMore(false);
  //     increaseView.removeAttribute('id');
  //   }
  // }
  return (
    <section className="place-card">
      <section style={{ position: 'relative' }}>
        <img className="place-card-image" src={place.imagePath} alt={place.name} />
        {/* <p className="place-card-category">{place.category}</p> */}
        <p className="place-card-location">
          {place.city}
          ,
          {' '}
          {place.country}
        </p>
      </section>
      <section className="place-card-body">
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4 className="place-card-name">{place.name}</h4>
          <Rating rating={place.rating} />
        </header>
        <section className="place-card-types-section">
          <h5 className="place-card-types">{place.category}</h5>
          <h5 className="place-card-types">{place.types[0]}</h5>
        </section>
        <p className="place-card-about">{place.about}</p>
        <button
          type="button"
          className="see-more"
        // onClick={(ev) => increaseDiv(ev.target)}
        >
          See more

        </button>
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
