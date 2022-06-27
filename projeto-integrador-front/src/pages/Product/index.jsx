import React, { useEffect, useState } from 'react';
// import  from "react-router-dom";

import 'swiper/css';
import './global.css';

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
  Divider,
} from '@chakra-ui/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import baseApi from '../../services/service.baseApi';

import ModalSlide from './components/ModalSlide';
import Map from './components/Map/Map';
import GridProductItem from './components/GridIProductItem';
import DetailPageHeader from './components/DetailPageHeader';
import ShareFavIcons from './components/ShareFavIcons';
import DescriptionSection from './components/DescriptionSection';

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

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
      <DetailPageHeader />
      <Box className="page-detail container">
        <ShareFavIcons />
        <Grid
          className="container"
          height={{ base: '25rem', lg: '28rem', '2xl': '32rem' }}
          templateRows="repeat(2, 1fr)"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: '2fr repeat(2, 1fr)' }}
          gap={{ base: '0.5', md: '1', xl: 2 }}
          padding={{ base: '0 0.5rem', md: '0 1.5rem' }}
          position="relative"
          // ref={finalRef}
          // tabIndex={-1}
        >
          <GridProductItem
            bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26cb0e81.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
            gridArea="1 / 1 / 3 / 2"
          />
          <GridProductItem
            bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26cb0e81.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
            gridArea="1 / 2 / 2 / 3"
          />
          <GridProductItem
            gridArea="1 / 3 / 2 / 4"
            bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26544b9f.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          />
          <GridProductItem
            gridArea="2 / 2 / 3 / 3"
            bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/51f14658.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          />
          <GridProductItem
            gridArea="2 / 3 / 3 / 4"
            bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/26cb0e81.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
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
            size="xl"
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
                  <Link to="/reserve">
                  <Button variant="ghost">Fazer reserva</Button>
                  </Link>
                </ModalFooter>
            </ModalContent>
          </Modal>
        </Grid>

        <Divider borderWidth="-1px" borderColor="var(--light-blue)" margin="2rem auto" />

        <DescriptionSection />

        <Divider borderWidth="-1px" borderColor="var(--light-blue)" margin="2rem auto" />

        <Map />

        <Divider borderWidth="-1px" borderColor="var(--light-blue)" margin="2rem auto" />

        <Box
          className="container"
          height="300px"
          border="1px solid red"
        >
          <Text textAlign="center" marginTop="5rem">
            FALTA ADICIONAR COMPONENT DO DOUG
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Product;
