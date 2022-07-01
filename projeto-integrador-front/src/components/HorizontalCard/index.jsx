import {
  Box,
  Heading,
  Text,
  Image,
  useMediaQuery,
  Badge,
  Divider,
  Icon,
  HStack,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import { MdPool } from 'react-icons/md';
import { IoMdWine } from 'react-icons/io';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { GiMedievalGate } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import geolocalization from '../../assets/geolocalization.svg';

function HorizontalCard({ cardInfo }) {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const {
 accoDescription, accoName, accoRoomGuests, accoRoomNumber, imagens, id
} =
    cardInfo;

  const navigate = useNavigate();

  const route = () => navigate(`/detail/accommodations/${id}`);

  const rating = 5;

  return (
    <Box
      maxHeight={isSmallerThan606 ? 'auto' : '300px'}
      flexDir={isSmallerThan606 ? 'column' : 'row'}
      boxShadow="2px 2px 8px var(--light-blue)"
      borderRadius="0.25rem"
      alignItems="stretch"
      margin="1rem auto"
      background="#FFF"
      overflow="hidden"
      display="flex"
      width="100%"
    >
      <Box
        minWidth={
          isSmallerThan606 ? '100%' : isSmallerThan800 ? '42.5%' : '35%'
        }
        maxWidth={isSmallerThan606 ? '100%' : '25%'}
        height="300px"
      >
        <Image
          src={
            imagens[0]?.headerImage ||
            'https://yt3.ggpht.com/a/AATXAJwDd0Kc2XYZQMWmcNrZHyEZmJHIUVYbiDJkftDVpg=s900-c-k-c0xffffffff-no-rj-mo'
          }
          objectPosition="center center"
          cursor="pointer"
          onClick={route}
          fit="cover"
          alt="meh"
          w="100%"
          h="100%"
        />
      </Box>
      <Box
        justifyContent="space-between"
        position="relative"
        flexDir="column"
        display="flex"
        p="1rem 1rem"
        w="100%"
      >
        <Box justifyContent="center" display="flex" flexDir="column">
          <Box alignItems="center" display="flex" gap={2}>
            <Badge
              background="green.200"
              color="var(--hard-blue)"
              borderRadius="base"
              pr="2"
            >
              Novo
            </Badge>
            <Box
              textTransform="uppercase"
              color="var(--light-blue)"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
            >
              1 Quarto &bull; 3 camas
            </Box>
          </Box>
          <Text color="var(--light-blue)" fontSize="sm" as="span">
            Hotel
          </Text>
          <VStack
            justifyContent="center"
            alignItems="center"
            position="absolute"
            flexDir="column"
            display="flex"
            top="0.5rem"
            right="1rem"
            pt="10px"
          >
            <Box>
              <Text
                background="var(--hard-blue)"
                borderRadius="0.25rem"
                textAlign="center"
                p="0.2rem 0.75rem"
                fontWeight="bold"
                color="#FFF"
                maxW="100%"
              >
                {rating}
              </Text>
              <Text
                color="var(--light-blue)"
                textAlign="center"
                fontWeight="bold"
                fontSize="sm"
                as="span"
              >
                {rating >= 4 ? 'Excelente!' : 'Bom'}
              </Text>
            </Box>
            <Grid templateColumns="1fr 1fr" gap="1rem">
              <GridItem>
                <Icon
                  as={MdPool}
                  color="gray.400"
                  boxSize="1.5rem"
                  cursor="pointer"
                  lineHeight="5px"
                  opacity="0.9"
                />
              </GridItem>
              <GridItem>
                <Icon
                  transition="all 0.2s ease-in-out"
                  _hover={{ color: 'red.500' }}
                  as={IoMdWine}
                  color="var(--blue)"
                  boxSize="1.5rem"
                  cursor="pointer"
                  lineHeight="5px"
                  opacity="0.9"
                  size="4rem"
                />
              </GridItem>
              <GridItem>
                <Icon
                  transition="all 0.2s ease-in-out"
                  _hover={{ color: 'red.500' }}
                  as={FaUmbrellaBeach}
                  color="var(--blue)"
                  boxSize="1.5rem"
                  cursor="pointer"
                  lineHeight="5px"
                  opacity="0.9"
                  size="4rem"
                />
              </GridItem>
              <GridItem>
                <Icon
                  transition="all 0.2s ease-in-out"
                  _hover={{ color: 'red.500' }}
                  as={GiMedievalGate}
                  color="var(--blue)"
                  boxSize="1.5rem"
                  cursor="pointer"
                  lineHeight="5px"
                  opacity="0.9"
                  size="4rem"
                />
              </GridItem>
            </Grid>
          </VStack>

          {/* <Box pt="1rem">
            <Image src={geolocalization} maxW="0.6rem" display="inline" />
            <Text fontSize="xs" as="span">
              {' '}
              A 940m do centro
              {' '}
              <Text as="span" color="var(--blue)" fontSize="xs">
                - MOSTRAR NO MAPA
              </Text>
            </Text>
          </Box> */}

          <Box pr="6rem">
            <Heading
              color="var(--hard-blue)"
              textAlign="justify"
              lineHeight="1.5rem"
              fontSize="1.2rem"
              overflow="hidden"
              cursor="pointer"
              onClick={route}
              maxH="72px"
              pr="1rem"
            >
              {accoName}
            </Heading>
            <Text
              lineHeight="1.2rem"
              textAlign="justify"
              fontSize="90%"
              p="1rem 0"
            >
              {accoDescription.slice(0, 500)}
              <Text as="span" color="var(--blue)" onClick={route} cursor="pointer">
                ... see more
              </Text>
            </Text>
          </Box>
        </Box>
        <Box
          justifyContent="space-between"
          borderTop="1px solid #dcdee2"
          position="relative"
          alignItems="center"
          paddingTop="1rem"
          display="flex"
        >
          <Text as="h3" color="var(--light-blue)">
            R$320,00/noite
          </Text>
          <HStack display="inline-block" padding="2.5px 5px">
            <Icon
              transition="all 0.2s ease-in-out"
              _hover={{ color: 'red.500' }}
              as={AiFillHeart}
              color="gray.400"
              boxSize="1.5rem"
              cursor="pointer"
              lineHeight="5px"
              opacity="0.9"
              size="4rem"
            />
            <Icon
              boxSize="1.5rem"
              cursor="pointer"
              opacity="0.75"
              color="black"
              as={FiShare2}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default HorizontalCard;
