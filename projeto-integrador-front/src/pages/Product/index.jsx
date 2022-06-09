import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';

export default function Product() {
  return (
    <>
      <Box
        w="100%"
        h="70px"
        bgColor="var(--hard-blue)"
        color="#FFF"
        display="flex"
        alignItems="center"
        padding="0 1rem"
        justifyContent="space-between"
        >
        <span>
          <h3>Categoria</h3>
          <h2>Nome do hotel</h2>
        </span>
        <button
          type="button"
          float="right"
          paddingLeft="1rem"
          >
            SETA
        </button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="2rem"
        lineHeight="1rem"
      >
        <Text
          w="60%"
          fontSize={{ base: '16px', lg: '18px' }}
          fontFamily="Poppins, sans-serif"
          color="var(--hard-blue)"
          fontWeight="500"
          mb="4"
          >
          Buenos Aires,Cidade Autônoma de Buenos Aires, Argentina 940m para o centro
        </Text>
        <span>
          <Text>
            Rating
          </Text>
        </span>
      </Box>
      <flex>
        <Image
          rounded="lg"
          alt="product image"
          src="https://www.short.ink/PNcw2pf1OzK"
          fit="cover"
          align="center"
          w={{ base: '100%', lg: '700px' }}
          h={{ base: '100%', sm: '600px', lg: '700px' }}
        />
      </flex>

      <Text
        fontSize={{ base: '16px', lg: '18px' }}
        fontFamily="Poppins, sans-serif"
        color="var(--hard-blue)"
        padding="1rem"
      >
        <h1>
          Fique no coração de Buenos Aires
        </h1>
      </Text>
      <Text
        color="#000000"
        fontWeight="500"
        fontSize={{ base: '16px', lg: '18px' }}
        padding="0 1rem 1rem"

      >
      Está localizado a poucas quadras da Avenida Alvear,da
      Avenida Quintana,do Parque San Martín e do bairro da
      Recoleta.Nos arredores também existem vários locais de
      interesse,como a Rua Florida,oCentro Comercial Galerías
      Pacífico,a zona de Puerto Madero,aPlaza de Mayo e o
      Palácio Municipal.
      </Text>
    </>
  );
}
