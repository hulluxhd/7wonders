import {
  Box,
  Heading,
  Text,
  Image,
  useMediaQuery,
  Badge,
} from '@chakra-ui/react';

import geolocalization from '../../assets/geolocalization.svg';

function PlaceCard({placeToRender}) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  console.log(placeToRender)
  return (
   <>
      <Box
        borderRadius="0.25rem"
        background="#FFF"
        display="flex"
        flexDir="column"
        flex={
          isSmallerThan606
            ? '0 1 90%'
            : isSmallerThan800
            ? '0 1 45%'
            : '0 1 32%'
        }
        boxShadow="base"
      >
        <Image
          src="https://tripnstay.com/wp-content/uploads/2018/02/1.jpg"
          w="100%"
        />
        <Box p="1rem 1rem">
          <Box display="flex" alignItems="start" pt="0.3rem" gap={2}>
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text color="var(--light-blue)" as="span">
                  HOTEL
                </Text>
                
              </Box>
              <Heading mt="10px" lineHeight="1.5rem" fontSize="1.5rem">
                Hermitage Hotel
              </Heading>
            </Box>
            <Box
              pt="10px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="#FFF"
                fontWeight="bold"
                p="0.2rem 0.75rem"
                background="var(--hard-blue)"
                borderRadius="0.25rem"
                textAlign="center"
                maxW="100%"
              >
                8
              </Text>
              <Text fontWeight="bold" textAlign="center" as="span">
                Muito bom
              </Text>
            </Box>
          </Box>
          <Box pt="1rem">
            <Image src={geolocalization} maxW="0.6rem" display="inline" />
            <Text fontSize="xs" as="span">
              {' '}
              A 940m do centro{' '}
              <Text as="span" color="var(--blue)" fontSize="xs">
                - MOSTRAR NO MAPA
              </Text>
            </Text>
          </Box>
          <Box>
            <Text p="1rem 0" fontSize="90%" lineHeight="1.2rem">
              {'A pool villa paradise, Anantara Kihavah Villas is a luxury resort in the Maldives that offers the ultimate in privacy and tranquility, your own sanctuary within a sanctuary. Expansive space that opens onto bright tropical nature with private pools,  high ceilings and wooden interiors. Savor the culinary art and  wine served in one of the only underwater restaurants and cellars in the world.'.slice(
                0,
                150
              )}
              <Text as="span" color="var(--blue)">
                ... see more
              </Text>
            </Text>
          </Box>
          
        </Box>
      </Box>
    </>
  );
}

export default PlaceCard;

PlaceCard.propTypes = {
  place: PropTypes.shape({
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

PlaceCard.defaultProps = {
  place: PropTypes.shape({
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};
