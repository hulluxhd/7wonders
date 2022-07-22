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
import { FiShare2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import removeWordsUntilThereIsOnlyTwo from '../../../../utils/util.removeWordsUntilThereIsOnlyTwo';

//  ESTES CARDS FICARÃO APENAS NA PÁGINA PRINCIPAL.
//  OS CARDS DE LISTAGEM SERÃO OUTROS, MAIS COMPLETOS

// * Mudar nome do componente para HOMECARD

function PlaceCard({ place }) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const {
    id, category, city, country, about, rating, imagePath, types, name
  } =
    place;

  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/detail/accommodations/${id}`)}
      alignItems="stretch"
      background="#FFF"
      flexDir="column"
      cursor="pointer"
      display="flex"
      w="100%"
    >
      <Box h="100%" position="relative">
        <Image
          borderRadius="0.25rem"
          src={imagePath}
          fit="cover"
          alt={name}
          w="100%"
          h="15rem"
        />
        <VStack
          transition="all 0.2s ease-in-out"
          borderRadius="0 0.25rem 0 0"
          position="absolute"
          paddingLeft="1rem"
          right="0"
          h="100%"
          top="0"
          _hover={{
            background: 'var(--light-blue)',
          }}
        >
          <VStack p="1rem 1rem 0 0">
            <Box>
              <Icon
                color="whiteAlpha.800"
                as={AiFillHeart}
                boxSize="1.5rem"
                cursor="pointer"
                opacity="0.9"
              />
            </Box>
            <Text
              background="var(--hard-blue)"
              borderRadius="0.25rem"
              lineHeight="1.5rem"
              textAlign="center"
              fontWeight="bold"
              boxSize="1.5rem"
              fontSize="xs"
              color="#FFF"
              maxW="100%"
            >
              {rating}
            </Text>
            <Icon
              boxSize="1.5rem"
              cursor="pointer"
              as={FiShare2}
              color="black"
              opacity="0.9"
            />
          </VStack>
        </VStack>
      </Box>

      <Box
        borderBottom="1px solid var(--blue)"
        borderRadius="0 0 0.25rem 0.25rem"
        borderX="1px solid var(--blue)"
        p="1rem 1rem"
      >
        <Box display="flex" alignItems="start" gap={2}>
          <Badge
            background="var(--blue)"
            borderRadius="base"
            color="#FFF"
            pr="2"
          >
            Novo
          </Badge>
          <Box
            color="var(--light-blue)"
            textTransform="uppercase"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
          >
            1 Quarto &bull; 3 camas
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box
              justifyContent="space-between"
              alignItems="center"
              display="flex"
            >
              <Text color="var(--light-blue)" fontSize="sm" as="span">
                {category}
              </Text>
            </Box>
            <Heading
              color="var(--hard-blue)"
              lineHeight="1.5rem"
              fontSize="1.2rem"
              overflow="hidden"
              mt="10px"
            >
              {isSmallerThan606 ? name : removeWordsUntilThereIsOnlyTwo(name)}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PlaceCard;
