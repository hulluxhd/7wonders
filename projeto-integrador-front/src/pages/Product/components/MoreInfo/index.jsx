import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';

export default function MoreInfo() {
  return (
    <Box
      className="moreInfo-section-container"
      padding="4"
      borderRadius="lg"
      bgColor="#fff"
      shadow="lg"
      color="#3F0D0C"
    >
      <Text
        as="h1"
        marginBottom="2"
      >
        O que você precisa saber:
      </Text>
      <Divider
        borderWidth="-2px"
        borderColor="#D9B061"
        margin="1rem auto"
      />
      <Box
        className="infos-container"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap="6"
        marginTop="5"
        justifyContent="space-evenly"
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
            fontSize="small"
            fontWeight="medium"
            mt="5"
            color="#696969"
          >
            Check-out: 10:00
          </Text>
          <Text
            fontSize="small"
            fontWeight="medium"
            mt="5"
            color="#696969"
          >
            Não é permitido festa
          </Text>
          <Text
            fontSize="small"
            fontWeight="medium"
            mt="5"
            color="#696969"
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
            fontSize="small"
            fontWeight="medium"
            mt="5"
          >
            Diretrizes de distanciamento social e outras regulamentações
            relacionadas ao novo coronovírus se aplicam
          </Text>
          <Text
            fontSize="small"
            fontWeight="medium"
            mt="5"
          >
            Detector de fumaça
          </Text>
          <Text
            fontSize="small"
            fontWeight="medium"
            mt="5"
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
            fontSize="small"
            fontWeight="medium"
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
