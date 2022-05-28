import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard';

function PlacesList({ placeList }) {
  return (
    <Box
      display="flex"
      p="2rem"
      flexWrap="wrap"
      justifyContent="space-evenly"
      gap="1rem"
      alignItems="stretch"
    >
      {placeList.map(
        // eslint-disable-next-line react/no-array-index-key
        (placeToRender, index) => (
          <PlaceCard key={`${placeToRender} + ${index.toString()} `} place={placeToRender} />
        )
      )}
    </Box>
  );
}

export default PlacesList;

/* PlacesList.propTypes = {
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
 */
