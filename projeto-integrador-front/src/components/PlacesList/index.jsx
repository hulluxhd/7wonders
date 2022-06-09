import React, { useContext } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard';
import Wrapper from '../Wrapper';
import { InfoContext } from '../../contexts/InfoContext';

function PlacesList() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { cardsRender } = useContext(InfoContext);

  return (
    <Wrapper>
      <Box
        display="grid"
        gridTemplateColumns={isSmallerThan606 ? '1fr' : (isSmallerThan800 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')}
        gap="1rem"
      >
        {cardsRender.map(
          // eslint-disable-next-line react/no-array-index-key
          (card, index) => (
            <PlaceCard
              key={`${card.city} + ${index.toString()} `}
              place={card}
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
