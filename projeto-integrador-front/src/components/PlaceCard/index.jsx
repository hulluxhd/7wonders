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

import { AiFillHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import geolocalization from '../../assets/geolocalization.svg';

function PlaceCard({ place }) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const {
    category,
    city,
    country,
    about,
    rating,
    imagePath,
    types,
    name
   } =
    place;

  function removeLastWord(phrase) {
    const splited = phrase.split(' ');
    while (splited.length > 2) splited.pop();
    return splited.join(' ');
  }

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
          src={imagePath}
          alt={name}
          w="100%"
          h="15rem"
          fit="cover"
          borderRadius="0.25rem 0.25rem 0 0"
        />
        <VStack
          position="absolute"
          borderRadius="0 0.25rem 0 0"
          top="0"
          right="0"
          paddingLeft="1rem"
          h="100%"
          transition="all 0.2s ease-in-out"
          _hover={{
              background: 'var(--light-blue)',
          }}
        >
          <VStack p="1rem 1rem 0 0">
            <Box>
            <Icon
              as={AiFillHeart}
              color="whiteAlpha.800"
              boxSize="1.5rem"
              cursor="pointer"
              opacity="0.9"
            />
            </Box>
            <Text
              color="#FFF"
              fontSize="xs"
              boxSize="1.5rem"
              lineHeight="1.5rem"
              fontWeight="bold"
              background="var(--hard-blue)"
              borderRadius="0.25rem"
              textAlign="center"
              maxW="100%"
            >
              {rating}
            </Text>
            <Icon
              as={FiShare2}
              color="black"
              boxSize="1.5rem"
              cursor="pointer"
              opacity="0.9"
            />
          </VStack>
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
              overflow="hidden"
            >
              {isSmallerThan606 ? name : removeLastWord(name)}
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
