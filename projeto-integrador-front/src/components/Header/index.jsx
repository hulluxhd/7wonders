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
  Divider,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { BsFillFlagFill } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import geolocalization from '../../assets/geolocalization.svg';
import calendar from '../../assets/calendar.svg';
import InputHeader from '../InputHeader';
import DrawerLogin from '../DrawerLogin';
import BasicButton from '../BasicButton';
import useComponentVisible from '../../hooks/useComponentVisible';

// eslint-disable-next-line react/prop-types
function Header({ data }) {
  const { toRender, setToRenderOnPage } = data;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  const [headerHeight, setHeaderHeight] = useState(0);

  const [place, setPlace] = useState('');

  const [inputSelected, setInputSelected] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const layoutWidth = window.innerWidth;

  useEffect(() => {
    const h = document.querySelector('.header').getBoundingClientRect().height;
    setHeaderHeight(h);
  }, [layoutWidth]);

  function handlePlace({ target }) {
    setPlace(target.value.toLowerCase());
  }

  console.log(place);

  // função que filtra os lugares baseado na busca do usuário
  function filterplaces(placeList) {
    let placesToRender = '';

    if (place !== '') {
      placesToRender = placeList.filter(
        el => el.city.toLowerCase().includes(place) || el.country.toLowerCase().includes(place)
      );
    } else {
      placesToRender = toRender;
    }

    return placesToRender;
  }

  useEffect(() => {
    const placesToRender = filterplaces(toRender);

    // seta os cards a serem renderizados
    setToRenderOnPage(placesToRender);
  }, [place]);

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
        zIndex="10"
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
            <Box
              position="relative"
              w={isSmallerThan606 ? '80%' : '35%'}
              ref={ref}
              onClick={() => setIsComponentVisible(true)}
              onChange={e => handlePlace(e)}
            >
              <InputHeader
                image={geolocalization}
                placeholder="Para onde iremos?"
                postop="10px"
              />
              {isComponentVisible && (
                <Box
                  position="absolute"
                  top="2.8rem"
                  background="#FFF"
                  w="100%"
                  lineHeight="1.3rem"
                  fontSize="1rem"
                  borderRadius="0.25rem"
                  maxH="16rem"
                  overflow="auto"
                >
                  {filterplaces(toRender).map((el, i) => (
                    <Box key={el.city}>
                      <Box
                        p="0.5rem 1rem"
                        cursor="pointer"
                        tabIndex={0}
                        borderRadius="0.25rem"
                        _hover={{ bgColor: 'var(--light-bege)' }}
                        onClick={() => console.log(el)}
                      >
                        <HStack spacing={3} align="center">
                          <Image maxW="1rem" src={geolocalization} />
                          <VStack spacing={0} justify="center" align="flex-start">
                            <Text
                              color="var(--hard-blue)"
                              fontWeight="bold"
                              fontFamily="Poppins, sans-serif"
                              fontSize="0.9rem"
                            >
                              {el.city}
                            </Text>
                            <HStack align="center">
                              <Text color="gray.500" fontWeight="bold" fontSize="xs" as="span">
                                {el.country}
                              </Text>
                              <Icon as={BsFillFlagFill} fontSize="xs" />
                            </HStack>
                          </VStack>
                        </HStack>
                      </Box>
                      <Divider borderColor="var(--blue)" w="100%" />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <Box w={isSmallerThan606 ? '80%' : '35%'}>
              <InputHeader
                image={calendar}
                placeholder="Check in - Check out"
              />
            </Box>
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
