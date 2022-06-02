import React, { useState } from 'react';
import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import CategoryCard from '../CategoryCard';
import Wrapper from '../Wrapper';

function Categories() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  const [eachCategory, setEachCategory] = useState([
    {
      category: 'Hotel',
      imagePath: 'images/Mardan_Palace.jpg',
      quantity: 100.031,
    },
    {
      category: 'Hotel & Spa',
      imagePath: 'images/Nayara.jpg',
      quantity: 100.031,
    },
    {
      category: 'Resort',
      imagePath: 'images/Jade_Mountain.jpg',
      quantity: 100.031,
    },
    {
      category: 'Casino',
      imagePath: 'images/Palms_Casino_Resort.jpg',
      quantity: 100.031,
    },
  ]);

  return (
    <Wrapper>
      <Text
        as="h2"
        color="var(--hard-blue)"
        fontSize={isSmallerThan606 ? '1.25rem' : '1.75rem'}
        lineHeight="1.75rem"
        fontWeight="700"
        py="1rem"
      >
        Buscar por tipo de acomodação
      </Text>
      <Box
        display="flex"
        // p="2rem"
        flexWrap={isSmallerThan606 ? 'wrap' : 'nowrap'}
        justifyContent="center"
        gap="0.8rem"
      >
        {eachCategory.map(
          // eslint-disable-next-line react/no-array-index-key
          (categoryToRender, index) => (
            <CategoryCard
              key={`${categoryToRender} + ${index.toString()} `}
              categoryToRender={categoryToRender}
            />
          )
        )}
      </Box>
    </Wrapper>
  );
}

export default Categories;

/* Categorys.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
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
