import {
 Badge, Box, Heading, Image, Text
} from '@chakra-ui/react';

function DetailsCard({ product }) {
  const {
    description,
    name,
    rooms,
    id,
    price,
    images,
    safetyRules,
    houseRules,
    adress,
    attributes,
    beds,
  } = product;

/*   let headerImage = images.find(image => image.title === 'Header');
  headerImage = headerImage.links; */

  return (
    <Box
      borderRadius="0.25rem"
      background="#FFF"
      display="flex"
      flexDir="column"
      w="100%"
      boxShadow="base"
      alignItems="stretch"
      color="#3F0D0C"
    >
      <Box h="100%" position="relative">
        <Image
          /* src={headerImage}
          alt={headerImage} */
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
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {rooms} Quarto &bull; {beds} camas
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="sm" as="span">
                Luxuous House
              </Text>
            </Box>
            <Heading
              mt="10px"
              lineHeight="1.5rem"
              fontSize="1.2rem"
              overflow="hidden"
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
