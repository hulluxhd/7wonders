import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import CategoryCard from '../CategoryCard';

function Categorys() {
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
    <Box
      display="flex"
      // p="2rem"
      // flexWrap="wrap"
      justifyContent="space-evenly"
      // gap="1rem"
      // alignItems="stretch"
    >
      {eachCategory.map(
        // eslint-disable-next-line react/no-array-index-key
        (categoryToRender, index) => (
          <CategoryCard key={`${categoryToRender} + ${index.toString()} `} categoryToRender={categoryToRender} />
        )
      )}
    </Box>
  );
}

export default Categorys;

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
