import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';

export default function MoreInfo() {
  return (
    <Box
      className="moreInfo-section-container"
      borderRadius="lg"
      color="#3F0D0C"
      bgColor="#fff"
      padding="4"
      shadow="lg"
    >
      <Text
        marginBottom="2"
        as="h1"
      >
        O que você precisa saber:
      </Text>
      <Divider
        borderColor="#D9B061"
        borderWidth="-2px"
        margin="1rem auto"
      />
      <Box
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="space-evenly"
        className="infos-container"
        display="flex"
        marginTop="5"
        gap="6"
      >
        <Box
          flex="1"
        >
          <Text
            as="h1"
          >
            Regras da casa
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
            color="#696969"
            mt="5"
          >
            Check-out: 10:00
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
            color="#696969"
            mt="5"
          >
            Não é permitido festa
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
            color="#696969"
            mt="5"
          >
            Não é permitido fumar
          </Text>
        </Box>
        <Box
          flex="1"
        >
          <Text
            as="h1"
          >
            Saúde e segurança
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
            color="#696969"
            mt="5"
          >
            Diretrizes de distanciamento social e outras regulamentações
            relacionadas ao novo coronovírus se aplicam
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
            color="#696969"
            mt="5"
          >
            Detector de fumaça
          </Text>
          <Text
            fontSize="small"
            fontWeight="medium"
            mt="5"
            color="#696969"
          >
            Depósito de segurança
          </Text>
        </Box>
        <Box
          flex="1"
        >
          <Text
            as="h1"
          >
            Política de cancelamento
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
            color="#696969"
            mt="5"
          >
            Adicione as datas da viagem para obter detalhes de cancelamento
            para esta estadia.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
