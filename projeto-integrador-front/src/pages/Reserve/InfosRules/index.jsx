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
    console.log(rulesArray);
    return rulesArray;
  }

  const houseRules = transformIntoArray(info.houseRules);
  const safetyRules = transformIntoArray(info.safetyRules);

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
          <Box as="ul" p="1rem">
            {houseRules.map((string, index) => (
              <Text
                fontSize="small"
                fontWeight="medium"
                mt="5"
                as="li"
                // eslint-disable-next-line react/no-array-index-key
                key={`${string}${index}`}>
                {string}
              </Text>
            ))}
          </Box>
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
          <Box as="ul" p="1rem">
            {safetyRules.map((string, index) => (
              <Text
                fontSize="small"
                fontWeight="medium"
                mt="5"
                as="li"
                // eslint-disable-next-line react/no-array-index-key
                key={`${string}${index}`}>
                {string}
              </Text>
            ))}
          </Box>
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
