import {
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';

import logo from '../../assets/logo.svg';
import geolocalization from '../../assets/geolocalization.svg';
import calendar from '../../assets/calendar.svg';
import InputHeader from '../InputHeader';
import { useEffect } from 'react';

function Header({children}) {
  // breakpoints
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan720] = useMediaQuery('(max-width: 720px)');
  const [isSmallerThan1100] = useMediaQuery('(max-width: 1080px)');

  

  useEffect(()=>{
    let height = document.querySelector(".header").offsetHeight
    console.log(height)
  }, [])


  return (
      <>
    <Box className='header' as="header" position="fixed" w="100%" right="0" top="0">
      <Box
        display="flex"
        p="20px 50px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image width="100px" src={logo} />
        <Box>
          <Breadcrumb separator="|" fontSize="0.8rem">
            <BreadcrumbItem>
              <BreadcrumbLink fontWeight="bold" color="var(--blue)">
                Entrar
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink fontWeight="bold" color="var(--blue)">
                Cadastrar
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        background="var(--light-blue)"
        p="0.8rem 1.5rem"
        flexDirection="column"
      >
        <Text
          mb="1rem"
          w="100%"
          color="#FFF"
          textAlign="center"
          fontSize="2rem"
          as="h1"
        >
          Buscar ofertas em hóteis, casas e muito mais
        </Text>

        <Flex
          gap={1}
          w="100%"
          flexDir={isSmallerThan606 ? 'column' : 'row'}
          justify="center"
          align="center"
          
        >
          <InputHeader
            image={geolocalization}
            placeholder="Para onde iremos?"
            posTop="10px"
            w={isSmallerThan606 ? "80%" :  '35%'}
          />
          <InputHeader
            image={calendar}
            placeholder="Check in - Check out"
            w={isSmallerThan606 ? "80%"  :  '35%'}
          />

          
          <Box
            w={isSmallerThan606 ?  "80%" : '15%'}
            ml={isSmallerThan606 ?  null : "1rem"}
            h="2.5rem"
            as="button"
            background="var(--blue)"
            border="2px solid var(--blue)"
            borderRadius="0.25rem"
            color="#FFF"
            p="inherit"
            fontWeight="bold"
            transition="all 0.2s ease-in-out"
            _hover={{
              background: 'transparent',
              border: '2px solid var(--blue)',
            }}
          >
            Buscar
          
          </Box>
        </Flex>
      </Box>
    </Box>
    <Box mt="calc(82.45px + 48px + 60px + 36px)"/>
    {children}
    
    </>
  );


}

export default Header;
