import {
    Badge,
    Box,
    Heading,
    Image,
    Text
    } from '@chakra-ui/react';

function DetailsCard() {
    /* const {
        imagePath,
        name,
        category,
    } = place; */
  return (
    <Box
      borderRadius="0.25rem"
      background="#FFF"
      display="flex"
      flexDir="column"
      w="100%"
      boxShadow="base"
      alignItems="stretch"
    >
      <Box h="100%" position="relative">
        <Image
          /* src={imagePath}
          alt={name} */
          w="100%"
          h="20rem"
          fit="cover"
          borderRadius="0.25rem 0.25rem 0 0"
        />
      </Box>
      <Box p="1rem 1rem">
        <Box display="flex" alignItems="start" gap={2}>
          <Badge background="green.200" borderRadius="base" pr="2">
            Novo
          </Badge>
          <Box
            color="var(--light-blue)"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            1 Quarto &bull; 3 camas
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="var(--light-blue)" fontSize="sm" as="span">
                {/* {category} */} Categoria
              </Text>
            </Box>
            <Heading
              color="var(--hard-blue)"
              mt="10px"
              lineHeight="1.5rem"
              fontSize="1.2rem"
              overflow="hidden"
            >
              Hotel EAST Miami
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailsCard;
