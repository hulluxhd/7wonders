import { Box, Heading, Text, Image } from '@chakra-ui/react';
import data from '../../data';
import BasicButton from '../../components/BasicButton';

function Home() {
  return (
    <Box display="flex">
      <Box display="flex" flexDir="column" maxW="400px" p="1rem">
        <Image
          src="https://tripnstay.com/wp-content/uploads/2018/02/1.jpg"
          w="100%"
        />
        <Box>
          <Box display="flex" pt="1rem" justifyContent="space-between" >
            <Box >
              <Text color="var(--light-blue)" as="span">
                HOTEL
              </Text>
              <Heading pt="10px" lineHeight="1rem" fontSize="1.5rem">Hermitage Hotel</Heading>
            </Box>
            <Box pt="10px" display="flex" flexDir="column">
              <Text
              
                color="#FFF"
                fontWeight="bold"
                p="0.2rem 0.75rem"
                background="var(--hard-blue)"
                borderRadius="0.25rem"
                textAlign="center"
                maxW="100%"
                m="0 auto"
              >
                8
              </Text>
              <Text fontWeight="bold" as="span">Muito bom</Text>
            </Box>
          </Box>
          <Text as="span">A 940m do centro</Text>
          <Text>Lorem</Text>
          <BasicButton w="100%" description="Saiba mais" />
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
