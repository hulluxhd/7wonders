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
import BasicButton from '../../components/BasicButton';
import ModalSlide from './components/ModalSlide';
import Map from './components/Map/Map';
import GridProductItem from './components/GridIProductItem';
import DetailPageHeader from './components/DetailPageHeader';
import ShareFavIcons from './components/ShareFavIcons';
import MoreInfo from './components/MoreInfo';
import DescriptionSection from './components/DescriptionSection';
import InfosRules from '../Reserve/InfosRules';
import url from '../../services/urls';
import Wrapper from '../../components/Wrapper';

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [product, setProduct] = useState({});
  const { searchId } = useParams();
  const navigate = useNavigate();

  const {
    description,
    name,
    rooms,
    id,
    price,
    safetyRules,
    houseRules,
    adress,
    attributes,
    beds,
  } = product;

  useEffect(() => {
    try {
      baseApi.get(`${url.ACCOMODDATION}/${searchId}`).then(({ data }) => {
        setProduct(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(product);
  return (
    <>
      <DetailPageHeader name={name} />
      <Wrapper>
        <Box className="page-detail container">
          <ShareFavIcons />
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              xl: '2fr repeat(2, 1fr)',
            }}
            height={{ base: '25rem', lg: '28rem', '2xl': '32rem' }}
            padding={{ base: '0 0.5rem', md: '0 1.5rem' }}
            gap={{ base: '0.5', md: '1', xl: 2 }}
            templateRows="repeat(2, 1fr)"
            className="container"
            position="relative"
            // ref={finalRef}
            // tabIndex={-1}
            // ! COLOCAR O EVENTO DE CLICK DENTRO DO MAP QUE VIRÁ DAS IMAGENS DA API
            onClick={onOpen}
          >
            <GridProductItem
              bgImage="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
              gridArea="1 / 1 / 3 / 2"
            />
            <GridProductItem
              bgImage="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
              gridArea="1 / 2 / 2 / 3"
            />
            <GridProductItem
              gridArea="1 / 3 / 2 / 4"
              bgImage="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
            />
            <GridProductItem
              gridArea="2 / 2 / 3 / 3"
              bgImage="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
            />
            <GridProductItem
              gridArea="2 / 3 / 3 / 4"
              bgImage="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
            />
            <BasicButton
              position="absolute"
              description="Ver mais"
              right="3.5rem"
              bottom="1rem"
              w="150px"
              mt={4}
              onClick={onOpen}
              _hover={{
                opacity: 0.9,
              }}
              transition="all 0.1s ease-in"
            />
            <Modal
              finalFocusRef={finalRef}
              size="xl"
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay
                bg="gray.200"
                backdropFilter="auto"
                backdropBlur="2px"
                width="100%"
              />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ModalSlide />
                </ModalBody>
                <ModalFooter gap="1rem" justifyContent="flex-end">
                  <BasicButton
                    bgColor="transparent"
                    border="none"
                    color="var(--hard-blue)"
                    w={{ base: '25%', lg: '20%' }}
                    description="Voltar"
                  />
                  <BasicButton
                    w={{ base: '25%', lg: '20%' }}
                    description="Fazer reserva"
                  />
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Grid>

          <Divider
            borderWidth="-1px"
            borderColor="var(--light-blue)"
            margin="2rem auto"
          />

          <DescriptionSection info={{
            description, price, attributes, id
          }} />

          <Divider
            borderColor="var(--light-blue)"
            margin="2rem auto 1rem"
            borderWidth="-1px"
          />

          <Map />

          <Divider
            borderColor="var(--light-blue)"
            borderWidth="-1px"
            margin="1rem auto"
          />

        </Box>
        {/* <InfosRules info={{ houseRules, safetyRules }} /> */}
      </Wrapper>
    </>
  );
}

export default Product;
