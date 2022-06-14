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
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Avatar,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { BsFillFlagFill } from 'react-icons/bs';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import { InfoContext } from '../../contexts/InfoContext';
import logo2 from '../../assets/logo2.svg';
import geolocalization from '../../assets/geolocalization.svg';
import calendar from '../../assets/calendar.svg';
import InputHeader from './components/InputHeader';
import DrawerLogin from './components/DrawerLogin';
import BasicButton from '../BasicButton';
import Wrapper from '../Wrapper';

function Header({ data }) {
  const {
    isOpen,
    onOpen,
    onClose,
  } = data;

  const {
    setCardsRender,
  } = useContext(InfoContext);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  // state para guardar a altura do header
  const [headerHeight, setHeaderHeight] = useState(0);

  // largura da viewport
  const layoutWidth = window.innerWidth;

  // context para guardar o username
  const {
    username,
    setUsername,
    place,
    setPlace,
    localData,
  } = useContext(InfoContext);

  const [toRenderOnDropdown, setToRenderOnDropdown] = useState(localData);

  // função que filtra os lugares baseado na busca do usuário
  function filterPlaces() {
    if (place.city) {
      return localData.filter(
        el => el.city.toLowerCase().includes(place.city.toLowerCase()) ||
          el.country.toLowerCase().includes(place.city.toLowerCase())
      );
    }
    return localData;
}

  // função que seta os cards a serem exibidos em tela
  function handleCardsOnDisplay() {
    setPlace(prev => ({
      ...prev,
      category: ''
    }));
    setCardsRender(filterPlaces());
  }

  function handleCleanRenderStates() {
    setCardsRender(localData);
    setToRenderOnDropdown(localData);
    setPlace({ city: '', country: '', category: '' });
  }

  // * Gerenciadores do motor de busca
  function handlePlace({ target }) {
    setPlace({ city: target.value, country: '', category: '' });
  }

  function handleInputValueController() {
    if (place.city && place.country) {
      return `${place.city}, ${place.country}`;
    }
    return place.city;
  }

  // seta os cards a serem renderizados no dropdown
  useEffect(() => {
    setToRenderOnDropdown(filterPlaces());
  }, [place]);

  // useEffect para observar a largura da viewport e identificar o
  // tamanho do header em cada alteração // ! Modificar
  useEffect(() => {
    const { height } = document
      .querySelector('.header')
      .getBoundingClientRect();
    setHeaderHeight(height);
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
        zIndex="10"
      >
        <Box
          as={isSmallerThan606 ? 'header' : null}
          className={isSmallerThan606 ? 'header' : null}
          position={isSmallerThan606 ? 'fixed' : 'relative'}
          right="0"
          top="0"
          w="100%"
          py="1rem"
          bg="var(--light-bege)"
        >
          <Wrapper
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Link to="/">
              <Image
                maxH="40px"
                fit="contain"
                src={logo2}
                onClick={handleCleanRenderStates}
              />
            </Link>
            {username ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Menu>
                  <MenuButton>
                    <Avatar
                      name={username}
                      size="sm"
                      bgColor="var(--hard-blue)"
                      color="#FFF"
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setUsername('')}>
                      Encerrar sessão
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Box p="0 0.5rem" lineHeight="1rem">
                  <Text
                    fontFamily="Poppins, sans-serif"
                    as="span"
                    display="block"
                  >
                    Olá,{' '}
                  </Text>
                  <Text fontFamily="Poppins, sans-serif" color="var(--blue)">
                    {username}
                  </Text>
                </Box>
              </Box>
            ) : (
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
                    <Link to="/register">
                      <BreadcrumbLink fontWeight="bold" color="var(--blue)">
                        Cadastrar
                      </BreadcrumbLink>
                    </Link>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Box>
            )}
          </Wrapper>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          background="var(--light-blue)"
          flexDirection="column"
          paddingBottom="1rem"
        >
          <Text
            p="1rem"
            w="100%"
            color="#FFF"
            textAlign="center"
            fontSize="1.75rem"
            as="h1"
          >
            Buscar ofertas em hóteis, casas e muito mais
          </Text>
          <Wrapper paddingX="10rem">
            <Grid
              gap={2}
              templateColumns={isSmallerThan606 ? '1fr' : 'repeat(5, 1fr)'}
              alignItems="center"
            >
              <GridItem
                w="100%"
                colSpan={isSmallerThan606 ? 1 : 2}
                position="relative"
                onClick={() => setIsComponentVisible(true)}
                ref={ref}
              >
                <InputHeader
                  onChange={e => handlePlace(e)}
                  image={geolocalization}
                  placeholder="Para onde iremos?"
                  postop="10px"
                  value={handleInputValueController()}
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
                    {toRenderOnDropdown.map((el, i) => (
                      <Box key={el.city}>
                        <Box
                          p="0.5rem 1rem"
                          cursor="pointer"
                          tabIndex={0}
                          borderRadius="0.25rem"
                          _hover={{ bgColor: 'var(--light-bege)' }}
                          onClick={() => setPlace({ city: el.city, country: el.country, category: '' })}
                        >
                          <HStack spacing={3} align="center">
                            <Image maxW="1rem" src={geolocalization} />
                            <VStack
                              spacing={0}
                              justify="center"
                              align="flex-start"
                            >
                              <Text
                                color="var(--hard-blue)"
                                fontWeight="bold"
                                fontFamily="Poppins, sans-serif"
                                fontSize="0.9rem"
                              >
                                {el.city}
                              </Text>
                              <HStack align="center">
                                <Text
                                  color="gray.500"
                                  fontWeight="bold"
                                  fontSize="xs"
                                  as="span"
                                >
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
              </GridItem>

              <GridItem colSpan={isSmallerThan606 ? 1 : 2} w="100%">
                <InputHeader
                  image={calendar}
                  placeholder="Check in - Check out"
                  disabled
                />
              </GridItem>
              <GridItem colSpan={1} w="100%">
                <BasicButton
                  w="100%"
                  description="Buscar"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    background: 'var(--light-blue)',
                    border: '2px solid var(--blue)',
                  }}
                  onClick={handleCardsOnDisplay}
                />
              </GridItem>
            </Grid>
          </Wrapper>
        </Box>
      </Box>

      <DrawerLogin
        breakpoint={isSmallerThan606}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Box pt={isSmallerThan606 ? null : `${headerHeight + 23.2}px`} />
    </>
  );
}

export default Header;
