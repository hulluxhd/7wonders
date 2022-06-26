import React, { useEffect, useState } from 'react';
// import  from "react-router-dom";

import 'swiper/css';
import './description.css';

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
import { useParams, useNavigate } from 'react-router-dom';
import baseApi from '../../services/service.baseApi';

import ModalSlide from './components/ModalSlide';
import Map from './components/Map/Map';

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [size, setSize] = React.useState('xl');
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const description = document.querySelector('#description');
  const descriptionButton = document.querySelector('#description-button');

  const goBack = () => {
    navigate('/', { replace: true });
  };

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

  return (
    <>
      <Box
        height="4rem"
        bgColor="var(--hard-blue)"
        color="#FFF"
        display="flex"
        alignItems="center"
        padding="0 2rem"
        justifyContent="space-between"
        position="relative"
        marginTop="-2px"
        >
        <Box as="span">
          <Text as="h4">Hoteis</Text>
          <Text as="h2">{product.accoName}</Text>
        </Box>
        <Box
          onClick={goBack}
          as="button"
          type="button"
          float="right"
          padding="0 0 0 1rem"
          >
            <ArrowUUpLeft size={32} color="#FFF" />
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
        className="container"
        height={{ base: '25rem', lg: '28rem', '2xl': '32rem' }}
        templateRows="repeat(2, 1fr)"
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: '2fr repeat(2, 1fr)' }}
        gap={{ base: '0.5', md: '1', xl: 2 }}
        padding={{ base: '0 0.5rem', md: '0 1.5rem' }}
        // ref={finalRef}
        // tabIndex={-1}
      >
        <GridItem
          rounded="lg"
          gridArea="1 / 1 / 3 / 2"
          cursor="pointer"
          margin="0 auto"
          width={{ base: '95%', md: '100%' }}
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
          gridArea="1 / 2 / 2 / 3"
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
          gridArea="1 / 3 / 2 / 4"
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
          gridArea="2 / 2 / 3 / 3"
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
        <GridItem
          rounded="lg"
          gridArea="2 / 3 / 3 / 4"
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26cb0e81.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
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
      <Box
        className="description-section container"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box
          padding="2rem"
          position="relative"
          display="flex"
          flexDirection="column"
          width={{ base: '100%', xl: '50%' }}
          border="1px solid green"
        >
        <Text
          fontSize={{ base: '20px', lg: '24px' }}
          fontFamily="Poppins, sans-serif"
          color="var(--hard-blue)"
          fontWeight="600"
          paddingBottom="1rem"
        >
          Umas das melhores localizações de Miami
        </Text>
          <Text
            id="description"
            className="description hided"
            // width={{ base: '100%', xl: '50%' }}
            color="var(--hard-blue)"
            fontWeight="500"
            fontSize={{ base: '16px', lg: '18px' }}
            lineHeight="1.6"
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
          <Button
            onClick={() => {
              description.classList.toggle('hided');
              descriptionButton.innerText === 'Ver Mais' ?
              descriptionButton.innerText = 'Ver Menos' :
              descriptionButton.innerText = 'Ver Mais';
            }}
            id="description-button"
            value="true"
            marginTop="1rem"
            maxWidth="10rem"
            alignSelf="center"
          >
            Ver Mais
          </Button>
        </Box>
        <Box
          className="accHighlights"
          border="1px solid green"
          width={{ base: '100%', xl: '50%' }}
          display="flex"
          padding={{ base: '1rem', lg: '1.5', xl: '2rem' }}
        >
          <Box>
            LISTA DE ATRIBUTOS
            <Button
              width="90%"
              maxWidth="35rem"
              margin="1rem auto"
              border="1px solid green"
              >
              RESERVAR AGORA
            </Button>
          </Box>
        </Box>
      </Box>
      <Map />
    </>
  );
}

export default Product;
