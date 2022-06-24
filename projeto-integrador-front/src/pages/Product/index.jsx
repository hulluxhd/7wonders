import React, { useEffect, useState } from 'react';

import 'swiper/css';

import {
  ArrowUUpLeft,
  Heart,
  MapPin,
  ShareNetwork,
  Star
} from 'phosphor-react';

import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import baseApi from '../../services/service.baseApi';

import ModalSlide from './components/ModalSlide';

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [size, setSize] = React.useState('xl');
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    try {
      baseApi
      .get(`/accommodations/${productId}`)
      .then(({ data }) => {
        setProduct(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(product);

  return (
    <>
      <Box
        h="70px"
        bgColor="var(--hard-blue)"
        color="#FFF"
        display="flex"
        alignItems="center"
        padding="0 2rem"
        justifyContent="space-between"
        position="relative"
        >
        <Box as="span">
          <Text as="h3">Hoteis</Text>
          <Text as="h2">Hotel EAST Miami</Text>
        </Box>
        <Box
          as="button"
          type="button"
          float="right"
          padding="0 0 0 1rem"
          >
            <ArrowUUpLeft size={32} color="#FFF" />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        // padding="1rem 2rem"
        padding={{ base: '0.5rem 1rem', xl: '1rem 2rem' }}
        bg="#dbdce7"
        lineHeight="1rem"
      >
        <Box display="flex" alignItems="center" gap="1rem">
          <MapPin size={28} color="var(--hard-blue)" position="floatLeft" />
          <Text
            maxWidth="60%"
            fontSize={{ base: '16px', lg: '18px' }}
            fontFamily="Poppins, sans-serif"
            color="var(--hard-blue)"
            fontWeight="500"
            >
            Miami, Estados Unidos, a 940m para o centro.
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="1.2rem"
        >
          <Box
            display={{ base: 'none', md: 'block' }}
          >
            <Text>Muito bom</Text>
            <Box display="flex">
              <Star size={26} color="var(--hard-blue)" />
              <Star size={26} color="var(--hard-blue)" />
              <Star size={26} color="var(--hard-blue)" />
              <Star size={26} color="var(--hard-blue)" />
              <Star size={26} color="var(--hard-blue)" />
            </Box>
          </Box>
          <Text
            color="#FFF"
            fontWeight="bold"
            p="1rem 0.75rem"
            background="var(--hard-blue)"
            borderRadius="0.25rem"
            textAlign="center"
            maxW="100%"
          >
            4.5
          </Text>
        </Box>
      </Box>
      <Box
        h="60px"
        w="100%"
        display="flex"
        alignItems="center"
        padding="0 2rem"
        gap="1rem"
      >
        <ShareNetwork
          size={28}
          color="var(--hard-blue)"
          cursor="pointer"
        />
        <Heart
          size={30}
          color="var(--hard-blue)"
          cursor="pointer"
        />
      </Box>
      <Grid
        height={{ base: '400px', sm: '600px', lg: '700px' }}
        templateRows="repeat(2, 1fr)"
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(5, 1fr)' }}
        gap={{ base: '0.5', md: '1', xl: 2 }}
        padding={{ base: '0 0.5rem', md: '0 1.5rem' }}
        position="relative"
        // ref={finalRef}
        tabIndex={-1}
      >
        <GridItem
          rounded="lg"
          rowSpan={2}
          colSpan={1}
          cursor="pointer"
          w={{ base: '100%', lg: '700px' }}
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/a4a65579.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          _hover={{
            transform: 'scale(1.01)',
          }}
          transition="transform 0.5s ease-in-out"
        />
        <GridItem
          rounded="lg"
          colSpan={2}
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26cb0e81.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgSize="cover"
          cursor="pointer"
          bgRepeat="no-repeat"
          _hover={{
            transform: 'scale(1.01)',
          }}
          transition="transform 0.5s ease-in-out"
        />
        <GridItem
          rounded="lg"
          colSpan={2}
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26544b9f.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgRepeat="no-repeat"
          cursor="pointer"
          bgSize="cover"
          _hover={{
            transform: 'scale(1.01)',
          }}
          transition="transform 0.5s ease-in-out"
        />
        <GridItem
          rounded="lg"
          colSpan={4}
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/51f14658.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgRepeat="no-repeat"
          cursor="pointer"
          bgSize="cover"
          _hover={{
            transform: 'scale(1.01)',
          }}
          transition="transform 0.5s ease-in-out"
        />
        <Button
          position="absolute"
          right="3.5rem"
          bottom="1rem"
          mt={4}
          onClick={onOpen}
          color="var(--hard-blue)"
          bg="lightblue"
          padding="0.5rem 1rem"
          borderRadius="8px"
          _hover={{
            color: '#FFF',
            bg: 'var(--hard-blue)',
            letterSpacing: '1.1px'
          }}
          transition="all 0.3s ease-in"
          >
          Ver mais
        </Button>
        <Modal
          finalFocusRef={finalRef}
          size={size}
          isOpen={isOpen}
          onClose={onClose}
          >
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropBlur="2px"
            width="100%"
          />
          <ModalContent
            minW="70vw"
          >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalSlide />
            </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Voltar
                </Button>
                <Button variant="ghost">Fazer reserva</Button>
              </ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>

      <Text
        fontSize={{ base: '20px', lg: '24px' }}
        fontFamily="Poppins, sans-serif"
        color="var(--hard-blue)"
        fontWeight="600"
        padding="2rem"
      >
        Umas das melhores localizações de Miami
      </Text>
      <Text
        width={{ base: '100%', xl: '75%' }}
        color="var(--hard-blue)"
        fontWeight="500"
        fontSize={{ base: '16px', lg: '18px' }}
        padding="0 2rem 1rem"
      >
        Situado a 6,7 km do aeroporto, EAST Miami oferece um terraço na cobertura
        e fica a apenas 5 minutosde carro de Brickell City Centre.
        Os hóspedes podem aproveitar massagens. Quinto La Huella,
        um dos 2 restaurantes, serve café da manhã, almoço e jantar.
        Este hotel de luxo possui 4 piscinas externas, 2 bares/lounges.
        os quartos oferecem comodidades como roupas de cama premium e
        chuveiros com efeito de chuva. Os viajantes costumam elogiar
        as boas condições da propriedade e a localização. A propriedade
        também tem acesso fácil aos meios de transporte público: Estação de
        Metromover Eighth Street fica a 2 minutos e Estação de Metromover Fifth
        Street fica a 4 minutos de caminhada do local.
      </Text>
    </>
  );
}

export default Product;
