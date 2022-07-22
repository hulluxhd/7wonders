import {
  Box,
  useMediaQuery,
  Text,
  Divider,
} from '@chakra-ui/react';

function InfosRules({ info }) {
  const [isSmallerThan606] = useMediaQuery('max-width: 606px');

  function transformIntoArray(rules) {
    const rulesArray = rules.trim().split('\n');
    return rulesArray;
  }

  const houseRules = transformIntoArray(info.houseRules);
  const safetyRules = transformIntoArray(info.safetyRules);

  return (
    <Box
      borderRadius="lg"
      bgColor="#fff"
      shadow="lg"
      padding="4"
      mt="2"
    >
      <Text
        p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
        fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
        color="var(--hard-blue)"
        lineHeight="1.75rem"
        fontWeight="700"
        as="h2"
        mt="3"
        mb="2"
      >
        O que você precisa saber:
      </Text>
      <Divider bgColor="var(--blue)" />
      <Box
        flexDirection="row"
        display="flex"
        mt="5"
        gap="4"
      >
        <Box w="33%">
          <Text
            fontSize={isSmallerThan606 ? '1.0rem' : '1.2rem'}
            color="var(--hard-blue)"
            lineHeight="1.75rem"
            fontWeight="600"
            as="h1"
            p="1"
          >
            Regras da casa
          </Text>
          <Box as="ul" p="1rem">
            {houseRules.map((string, index) => (
              <Text
                // eslint-disable-next-line react/no-array-index-key
                key={`${string}${index}`}
                fontWeight="medium"
                fontSize="small"
                mt="5"
                as="li"
              >
                {string}
              </Text>
            ))}
          </Box>
        </Box>
        <Box w="33%">
          <Text
            fontSize={isSmallerThan606 ? '1.0rem' : '1.2rem'}
            color="var(--hard-blue)"
            lineHeight="1.75rem"
            fontWeight="600"
            as="h1"
            p="1"
          >
            Saúde e segurança
          </Text>
          <Box as="ul" p="1rem">
            {safetyRules.map((string, index) => (
              <Text
                fontWeight="medium"
                fontSize="small"
                as="li"
                mt="5"
                // eslint-disable-next-line react/no-array-index-key
                key={`${string}${index}`}>
                {string}
              </Text>
            ))}
          </Box>
        </Box>
        <Box w="33%">
          <Text
            fontSize={isSmallerThan606 ? '1.0rem' : '1.2rem'}
            color="var(--hard-blue)"
            lineHeight="1.75rem"
            fontWeight="600"
            as="h1"
            p="1"
          >
            Política de cancelamento
          </Text>
          <Text
            fontWeight="medium"
            fontSize="small"
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
