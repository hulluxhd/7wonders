import { Text, useMediaQuery } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';
import baseApi from '../../services/service.baseApi';
import url from '../../services/urls';
import Categories from './components/Categories';
import PlacesList from './components/PlacesList';

function Home() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const { productId } = useParams();
  return (
    <>
      <Categories />
      <Wrapper>
        <Text
          fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
          color="var(--hard-blue)"
          lineHeight="1.75rem"
          fontWeight="700"
          p="2rem 0 1rem"
          as="h2"
        >
          Recomendações
        </Text>
      </Wrapper>
      <PlacesList />
    </>
  );
}

export default Home;
