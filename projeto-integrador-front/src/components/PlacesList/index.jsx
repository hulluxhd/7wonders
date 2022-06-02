import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard';
import Wrapper from '../Wrapper';

function PlacesList({ placeList }) {
  return (
    <Wrapper>
      <Text
        as="h2"
        color="var(--hard-blue)"
        fontSize="1.75rem"
        lineHeight="1.75rem"
        fontWeight="700"
        p="2rem 0 1rem"
      >
        Recomendações
      </Text>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="1rem"
      >
        {placeList.map(
          // eslint-disable-next-line react/no-array-index-key
          (placeToRender, index) => (
            <PlaceCard
              key={`${placeToRender} + ${index.toString()} `}
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
