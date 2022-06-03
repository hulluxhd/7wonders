import { Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import PlacesList from '../../components/PlacesList';
import Wrapper from '../../components/Wrapper';
import Categories from './Categories';

function Home({ render }) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  return (
    <>
      <Categories />
      <Wrapper>
        <Text
          as="h2"
          color="var(--hard-blue)"
          fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
          lineHeight="1.75rem"
          fontWeight="700"
          p="2rem 0 1rem"
        >
          Recomendações
        </Text>
      </Wrapper>
      <PlacesList placeList={render} />
    </>
  );
}

export default Home;
