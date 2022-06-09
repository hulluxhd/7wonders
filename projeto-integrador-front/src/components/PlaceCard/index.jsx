import {
  Box,
  Heading,
  Text,
  Image,
  useMediaQuery,
  Badge,
  Icon,
  VStack,
} from '@chakra-ui/react';

import { AiFillHeart } from 'react-icons/ai';
import geolocalization from '../../assets/geolocalization.svg';

function PlaceCard({ place }) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { category, city, country, about, rating, imagePath, types, name } =
    place;

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
        <Image src={imagePath} alt={name} w="100%" h="15rem" fit="cover" borderRadius="0.25rem 0.25rem 0 0 " />
        <VStack position="absolute" top="1rem" right="1rem">
          <Icon
            as={AiFillHeart}
            color="gray.400"
            boxSize="2rem"
            cursor="pointer"
          />
          <Text
            color="#FFF"
            fontSize="sm"
            boxSize="2rem"
            lineHeight="2rem"
            fontWeight="bold"
            background="var(--hard-blue)"
            borderRadius="0.25rem"
            textAlign="center"
            maxW="100%"
          >
            {rating}
          </Text>
        </VStack>
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
                {category}
              </Text>
            </Box>
            <Heading
              color="var(--hard-blue)"
              mt="10px"
              lineHeight="1.5rem"
              fontSize="1.2rem"
            >
              {name}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* PlaceCard.propTypes = {
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
}; */

export default PlaceCard;
