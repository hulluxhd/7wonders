import React, { useEffect, useState } from 'react';
import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import CategoryCard from '../CategoryCard';
import Wrapper from '../../../../components/Wrapper';
import baseApi from '../../../../services/service.baseApi';

function Categories() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan851] = useMediaQuery('(max-width: 851px)');

  const [eachCategory, setEachCategory] = useState([
    {
      id: 2,
      categoryName: 'Hotel',
      imagePath: 'images/Mardan_Palace.jpg',
      accommodationSet: []
    },
    {
      id: 3,
      categoryName: 'Hotel & Spa',
      imagePath: 'images/Nayara.jpg',
      accommodationSet: []
    },
    {
      id: 4,
      categoryName: 'Resort',
      imagePath: 'images/Jade_Mountain.jpg',
      accommodationSet: []
    },
    {
      id: 5,
      categoryName: 'Casino',
      imagePath: 'images/Palms_Casino_Resort.jpg',
      accommodationSet: []
    },
  ]);

  useEffect(() => {
      baseApi.get('categories').then(({ data }) => {
        setEachCategory([...eachCategory, ...data]);
    });
  }, []);

  return (
    <Box background="#FFF" p="0 0 0.5rem">
      <Wrapper>
        <Text
          as="h2"
          color="var(--hard-blue)"
          fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
          lineHeight="1.75rem"
          fontWeight="700"
          p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
        >
          Buscar por tipo de acomodação
        </Text>
        <Box
          display="grid"
          gridTemplateColumns={isSmallerThan606 ? 'repeat(1, 1fr)' : (isSmallerThan851 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)')}
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
    </Box>
  );
}

export default Categories;
