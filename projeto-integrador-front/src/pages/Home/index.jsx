import { Text, useMediaQuery, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import PlacesList from '../../components/PlacesList';
import Wrapper from '../../components/Wrapper';
import Categories from './components/Categories';
import Header from '../../components/Header';

function Home() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Header
      data={{
        isOpen,
        onOpen,
        onClose,
      }}
    />
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
      <PlacesList />
    </>
  );
}

export default Home;
