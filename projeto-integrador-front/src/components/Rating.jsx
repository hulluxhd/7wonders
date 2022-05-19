import React from 'react';

import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <section className="place-card-rating">
        <p className="rating">{rating}</p>
      </section>
  );
}

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;