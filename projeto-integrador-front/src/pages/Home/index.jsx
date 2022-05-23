import {
  Box,
  Heading,
  Text,
  Image,
  useMediaQuery,
  Badge,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

import data from '../../data';
import BasicButton from '../../components/BasicButton';
import geolocalization from '../../assets/geolocalization.svg';

function Home() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Box
      display="flex"
      p="2rem"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-evenly"
      gap="1rem"
    >
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
            <Badge borderRadius="full" pr="2">New</Badge>
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
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text color="var(--light-blue)" as="span">
                  HOTEL
                </Text>
                <Box display="flex" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((el, i) => (
                      <StarIcon key={i} color={i < 4 ? "var(--blue)" : "gray.500"}/>
                    ))}
                </Box>
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
          <BasicButton
            w="100%"
            _hover={{
              color: 'var(--hard-blue)',
              background: 'transparent',
              border: '2px solid --blue',
            }}
            description="Saiba mais"
          />
        </Box>
      </Box>
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
          <Box display="flex" pt="1rem" justifyContent="space-between">
            <Box>
              <Text color="var(--light-blue)" as="span">
                HOTEL
              </Text>
              <Heading pt="10px" lineHeight="1.5rem" fontSize="1.5rem">
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
            <Text as="span">
              {' '}
              A 940m do centro{' '}
              <Text as="span" color="var(--blue)" fontSize="0.75rem">
                - MOSTRAR NO MAPA
              </Text>
            </Text>
          </Box>
          <Box maxH="5rem">
            <Text fontSize="90%" lineHeight="1.2rem" max>
              A pool villa paradise, Anantara Kihavah Villas is a luxury resort
              in the Maldives that offers the ultimate in privacy and
              tranquility, your own sanctuary within a sanctuary. Expansive
              space that opens onto bright tropical nature with private pools,
              high ceilings and wooden interiors. Savor the culinary art and
              wine served in one of the only underwater restaurants and cellars
              in the world.
            </Text>
          </Box>
          <BasicButton
            w="100%"
            _hover={{
              color: 'var(--hard-blue)',
              background: 'transparent',
              border: '2px solid --blue',
            }}
            description="Saiba mais"
          />
        </Box>
      </Box>
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
          <Box display="flex" pt="1rem" justifyContent="space-between">
            <Box>
              <Heading pt="10px" lineHeight="1.5rem" fontSize="1.5rem">
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
            <Text as="span">
              {' '}
              A 940m do centro{' '}
              <Text as="span" color="var(--blue)" fontSize="0.75rem">
                - MOSTRAR NO MAPA
              </Text>
            </Text>
          </Box>
          <Box p="1rem 0" maxH="5rem">
            <Text fontSize="90%" lineHeight="1.2rem">
              A pool villa paradise, Anantara Kihavah Villas is a luxury resort
              in the Maldives that offers the ultimate in privacy and
              tranquility, your own sanctuary within a sanctuary. Expansive
              space that opens onto bright tropical nature with private pools,
              high ceilings and wooden interiors. Savor the culinary art and
              wine served in one of the only underwater restaurants and cellars
              in the world.
            </Text>
          </Box>
          <BasicButton
            w="100%"
            _hover={{
              color: 'var(--hard-blue)',
              background: 'transparent',
              border: '2px solid --blue',
            }}
            description="Saiba mais"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
