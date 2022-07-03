import {
  Box,
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  UnorderedList
} from '@chakra-ui/react';
// import { PawPrint } from 'phosphor-react';
// import { FontsAwesome } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdPets, MdAcUnit } from 'react-icons/md';

import React from 'react';
import { List } from 'phosphor-react';
import AttributeIcon from '../AttributeIcon';

export default function DescriptionSection() {
  const description = document.querySelector('#description-text');
  const descriptionButton = document.querySelector('#description-button');

  return (
    <Box
      className="description-section container"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      color="#3F0D0C"
      >
        <Box
          padding="2rem"
          position="relative"
          display="flex"
          flexDirection="column"
          width={{ base: '100%', xl: '50%' }}
          // color="#3F0D0C"
        >
        <Text
          fontSize={{ base: '20px', lg: '24px' }}
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          paddingBottom="1rem"
        >
          Umas das melhores localizações de Miami
        </Text>
          <Text
            id="description-text"
            className="description hided"
            // width={{ base: '100%', xl: '50%' }}
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
              descriptionButton.innerText === 'Ler Mais' ?
              descriptionButton.innerText = 'Ler Menos' :
              descriptionButton.innerText = 'Ler Mais';
            }}
            id="description-button"
            value="true"
            marginTop="1rem"
            maxWidth="10rem"
            alignSelf="center"
            backgroundColor="#8D6F57"
            border="none"
            color="#FFF"
            _hover={{
              color: '#D9B061',
              bg: '#3F0D0C',
              letterSpacing: '1.1px'
            }}
            transition="all 0.3s ease-in"
          >
            Ler Mais
          </Button>
        </Box>
        <Box
          className="accHighlights"
          width={{ base: '90%', xl: '40%' }}
          display="flex"
          margin={{ base: '1rem auto', lg: '1.5rem', xl: '1rem' }}
          boxShadow="2px 2px 10px #D9B061"
          backgroundColor="#FFF"
          borderRadius="10px"
          minHeight="350px"
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            padding="2rem"
            className="card-attributes"
          >
            <Text as="h2" paddingBottom="1rem">
              Esta acomodação oferece:
            </Text>

            <Box
              className="attribute-icons-container"
              display="flex"
              flexWrap="wrap"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              gap="1rem"
            >
              <AttributeIcon />
              <AttributeIcon />
              <AttributeIcon />
              <AttributeIcon />
              <AttributeIcon />
              <AttributeIcon />
            </Box>

            <Text as="h1" padding="2rem 0">
              A partir de R$299,00
            </Text>

            <Divider borderWidth="-1px" borderColor="#D9B061" margin="0.5rem auto" />

            <Box display="flex" className="button-container">
              <Button
                width="100%"
                maxWidth="35rem"
                margin="1rem auto"
                bg="#8D6F57"
                border="1px solid #D9B061"
                color="#FFF"
                _hover={{
                  color: '#D9B061',
                  bg: '#3F0D0C',
                  letterSpacing: '1.1px'
                }}
                transition="all 0.3s ease-in"
                >
                RESERVAR AGORA
              </Button>
            </Box>
          </Box>
        </Box>
    </Box>
  );
}
