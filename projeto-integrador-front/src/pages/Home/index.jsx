import { Box, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';
import data from '../../data';
import BasicButton from '../../components/BasicButton';
import geolocalization from '../../assets/geolocalization.svg';

function Home() {

  const [isSmallerThan606] = useMediaQuery("(max-width: 606px)")
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)")


  return (
    <Box display="flex" p="2rem" flexWrap='wrap' alignItems="center" justifyContent="center">
      <Box borderRadius="0.25rem" background="#FFF" display="flex" flexDir="column" flex={isSmallerThan606 ? "0 1 90%" : (isSmallerThan800 ? "0 1 45%" : "0 1 25%")} boxShadow="base">
        <Image
          src="https://tripnstay.com/wp-content/uploads/2018/02/1.jpg"
          w="100%"
        />
        <Box p="1rem 1rem" >
          <Box display="flex" pt="1rem" justifyContent="space-between" >
            <Box >
              <Text color="var(--light-blue)" as="span">
                HOTEL
              </Text>
              <Heading pt="10px" lineHeight="1.5rem" fontSize="1.5rem">Hermitage Hotel</Heading>
            </Box>
            <Box pt="10px" display="flex" flexDir="column" alignItems="center" justifyContent="center">
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
              <Text fontWeight="bold" textAlign="center" as="span">Muito bom</Text>
            </Box>
          </Box>
          <Box pt="1rem" >
            <Image src={geolocalization} maxW="0.6rem" display="inline" />
            <Text as="span"> A 940m do centro <Text as="span" color="var(--blue)" fontSize='0.75rem'>- MOSTRAR NO MAPA</Text></Text>
          </Box>
          <Box p="1rem 0" maxH="5rem" >
            <Text fontSize="90%" lineHeight="1.2rem" >A pool villa paradise, Anantara Kihavah Villas is a luxury resort in the Maldives that offers the ultimate in privacy and tranquility, your own sanctuary within a sanctuary. Expansive space that opens onto bright tropical nature with private pools, high ceilings and wooden interiors. Savor the culinary art and wine served in one of the only underwater restaurants and cellars in the world.
            </Text>

          </Box>
          <BasicButton w="100%" _hover={{ color: "var(--hard-blue)", background: "transparent", border: '2px solid --blue' }} description="Saiba mais" />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" maxW="400px" p="1rem">
        <Image
          src="https://tripnstay.com/wp-content/uploads/2018/02/1.jpg"
          w="100%"
        />
        <Box>
          <Box>
            <Text as="span">Hotel</Text>
            <Heading>Hermitage Hotel</Heading>
            <Box>
              <Box>8</Box>
              <Text as="span">Muito bom</Text>
            </Box>
          </Box>
          <Text as="span">A 940m do centro</Text>
          <Text>Lorem</Text>
          <BasicButton w="100%" description="Saiba mais" />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
