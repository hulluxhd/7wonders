import {
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react';

import logo from '../../assets/logo.svg';
import geolocalization from '../../assets/geolocalization.svg';
import calendar from '../../assets/calendar.svg';
import InputHeader from '../InputHeader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DrawerLogin from '../DrawerLogin';
import BasicButton from '../BasicButton';

function Header() {
  // breakpoints
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  const [headerHeight, setHeaderHeight] = useState(0);

  const layoutWidth = window.innerWidth;

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const h = document.querySelector('.header').getBoundingClientRect().height;
    setHeaderHeight(h);
  }, [layoutWidth]);

  return (
    <>
      <Box
        as={isSmallerThan606 ? null : 'header'}
        className={isSmallerThan606 ? null : 'header'}
        position={isSmallerThan606 ? 'relative' : 'fixed'}
        pt={isSmallerThan606 ? `${headerHeight}px` : null}
        w="100%"
        right="0"
        top="0"
      >
        <Box
          as={isSmallerThan606 ? 'header' : null}
          className={isSmallerThan606 ? 'header' : null}
          position={isSmallerThan606 ? 'fixed' : 'relative'}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          right="0"
          top="0"
          w="100%"
          p="20px 50px"
          bg="var(--light-bege)"
          zIndex={2}
        >
          <Link to="/">
            <Image width="100px" src={logo} />
          </Link>
          <Box>
            <Breadcrumb separator="|" fontSize="0.8rem">
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={onOpen}
                  fontWeight="bold"
                  color="var(--blue)"
                >
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
            p="1rem 0"
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
              postop="10px"
              w={isSmallerThan606 ? '80%' : '35%'}
            />
            <InputHeader
              image={calendar}
              placeholder="Check in - Check out"
              w={isSmallerThan606 ? '80%' : '35%'}
            />

            <BasicButton
              w={isSmallerThan606 ? '80%' : '15%'}
              ml={isSmallerThan606 ? null : '1rem'}
              description="Buscar"
            />
          </Flex>
        </Box>
      </Box>
      <DrawerLogin isOpen={isOpen} onClose={onClose} />
      <Box pt={isSmallerThan606 ? null : `${headerHeight + 23.2}px`} />
    </>
  );
}

export default Header;
