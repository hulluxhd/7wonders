import {
  Box,
  Button,
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

export default function DescriptionSection() {
  const description = document.querySelector('#description-text');
  const descriptionButton = document.querySelector('#description-button');

  return (
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
            id="description-text"
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
              descriptionButton.innerText === 'Ler Mais' ?
              descriptionButton.innerText = 'Ler Menos' :
              descriptionButton.innerText = 'Ler Mais';
            }}
            id="description-button"
            value="true"
            marginTop="1rem"
            maxWidth="10rem"
            alignSelf="center"
          >
            Ler Mais
          </Button>
        </Box>
        <Box
          className="accHighlights"
          width={{ base: '90%', xl: '50%' }}
          display="flex"
          margin={{ base: '1rem auto', lg: '1.5 auto', xl: '0 auto' }}
          boxShadow="2px 6px 20px var(--hard-blue)"
          borderRadius="10px"
          height="350px"
          color="var(--hard-blue)"
        >
          <Box
            // border="1px solid var(--hard-blue)"
            display="flex"
            flexDirection="column"
            width="100%"
            padding="1rem"
            className="card-attributes"
          >
            <Text as="h2" paddingBottom="1rem">
              Esta acomodação oferece:
            </Text>

            <Box
              display="flex"
              gap="1rem"
            >
              <Popover>
                <PopoverTrigger>
                  <Button padding="2rem 0.5rem" borderRadius="25%">
                    <MdAcUnit fontSize="3.5rem" color="var(--light-blue)" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Permite pets</PopoverHeader>
                  <PopoverBody>Esta acomodação está preparada</PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Text as="h1" padding="2rem 0">
              A partir de R$299,00
            </Text>

            <Box display="flex" className="button-container">
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
    </Box>
  );
}
