import {
    Box,
    useMediaQuery,
    Text,
    Divider,
} from '@chakra-ui/react';

function InfosRules() {
    const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

    return (
        <Box
          padding="4"
          borderRadius="lg"
          bgColor="#fff"
          shadow="lg"
          mt="2"
        >
            <Text
              as="h2"
              color="var(--hard-blue)"
              fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
              lineHeight="1.75rem"
              fontWeight="700"
              p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
              mt="3"
              mb="2"
            >
                O que você precisa saber:
            </Text>
            <Divider bgColor="var(--blue)" />
            <Box
              display="flex"
              flexDirection="row"
              mt="5"
              gap="4"
            >
                <Box w="33%">
                    <Text
                      as="h1"
                      color="var(--hard-blue)"
                      fontSize={isSmallerThan606 ? '1.0rem' : '1.2rem'}
                      lineHeight="1.75rem"
                      fontWeight="600"
                      p="1"
                    >
                        Regras da casa
                    </Text>
                    <Text
                      fontSize="small"
                      fontWeight="medium"
                      mt="5"
                    >
                        Check-out: 10:00
                    </Text>
                    <Text
                      fontSize="small"
                      fontWeight="medium"
                      mt="5"
                    >
                        Não é permitido festa
                    </Text>
                    <Text
                      fontSize="small"
                      fontWeight="medium"
                      mt="5"
                    >
                        Não é permitido fumar
                    </Text>
                </Box>
                <Box w="33%">
                    <Text
                      as="h1"
                      color="var(--hard-blue)"
                      fontSize={isSmallerThan606 ? '1.0rem' : '1.2rem'}
                      lineHeight="1.75rem"
                      fontWeight="600"
                      p="1"
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
                <Box w="33%">
                    <Text
                      as="h1"
                      color="var(--hard-blue)"
                      fontSize={isSmallerThan606 ? '1.0rem' : '1.2rem'}
                      lineHeight="1.75rem"
                      fontWeight="600"
                      p="1"
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

export default InfosRules;
