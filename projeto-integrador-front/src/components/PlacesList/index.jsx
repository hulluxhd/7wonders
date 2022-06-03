import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard';
import Wrapper from '../Wrapper';

function PlacesList({ placeList }) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  return (
    <Wrapper>
      <Box
        display="grid"
        gridTemplateColumns={isSmallerThan606 ? '1fr' : (isSmallerThan800 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')}
        gap="1rem"
      >
        {placeList.map(
          // eslint-disable-next-line react/no-array-index-key
          (placeToRender, index) => (
            <PlaceCard
              key={`${placeToRender.city} + ${index.toString()} `}
              place={placeToRender}
            />
          )
        )}
      </Box>
    </Wrapper>
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
