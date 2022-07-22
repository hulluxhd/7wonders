import {
  Badge, Box, Heading, Image, Text
} from '@chakra-ui/react';

function DetailsCard({ product }) {
  const {
    description,
    safetyRules,
    attributes,
    houseRules,
    images,
    adress,
    price,
    rooms,
    name,
    beds,
    id,
  } = product;

  /*   let headerImage = images.find(image => image.title === 'Header');
    headerImage = headerImage.links; */

  return (
    <Box
      borderRadius="0.25rem"
      alignItems="stretch"
      background="#FFF"
      flexDir="column"
      boxShadow="base"
      color="#3F0D0C"
      display="flex"
      w="100%"
    >
      <Box h="100%" position="relative">
        <Image
          src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
          borderRadius="0.25rem 0.25rem 0 0"
          alt="imagem"
          fit="cover"
          h="20rem"
          w="100%"
        />
      </Box>
      <Box p="1rem 1rem">
        <Box display="flex" alignItems="start" gap={2}>
          <Badge background="green.200" borderRadius="base" pr="2">
            Novo
          </Badge>
          <Box
            textTransform="uppercase"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
          >
            {rooms} Quarto &bull; {beds} camas
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box
              justifyContent="space-between"
              alignItems="center"
              display="flex"
            >
              <Text fontSize="sm" as="span">
                Luxuous House
              </Text>
            </Box>
            <Heading
              lineHeight="1.5rem"
              fontSize="1.2rem"
              overflow="hidden"
              mt="10px"
            >
              {name}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailsCard;
