import {
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  useMediaQuery,
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
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../contexts/InfoContext';
import geolocalization from '../../assets/geolocalization.svg';
import calendar from '../../assets/calendar.svg';
import logo5 from '../../assets/logo5.png';
import InputHeader from './components/InputHeader';
import DrawerLogin from './components/DrawerLogin';
import BasicButton from '../BasicButton';
import BasicCalendar from '../Calendar';
import Wrapper from '../Wrapper';
import ComponentIsVisible from './utils/util.ComponentsVisible';
import handleInputDateValueController from './utils/util.handleInputDateValueController';
import handleInputCityValueController from './utils/util.handleInputCityValueController';
import baseApi from '../../services/service.baseApi';
import renderDropdown from './utils/util.renderDropdown';
import getCities from './utils/util.getCities';

function Header({ drawerFunctions, children }) {
  const {
    isOpen,
    onOpen,
    onClose,
  } = drawerFunctions;

  const {
    setCardsRender,
    dateCheckinAndCheckout,
    setDateCheckinAndCheckout,
    user,
    setUser,
    setPlace,
    localData,
  } = useContext(InfoContext);

  const componentsVisible = new ComponentIsVisible();

  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  // state para guardar a altura do header
  const [headerHeight, setHeaderHeight] = useState(0);

  const [cities, setCities] = useState([]);

  const [temporaryPlace, setTemporaryPlace] = useState({});

  // largura da viewport
  const layoutWidth = window.innerWidth;

  const [toRenderOnDropdown, setToRenderOnDropdown] = useState([]);

  // função que seta os cards a serem exibidos
  // em tela na página de resultados
  function handleCardsOnDisplay() {
    setPlace({
        ...temporaryPlace,
        category: '',
    });
  }

  function handleCleanRenderStates() {
    setCardsRender(localData);
    setDateCheckinAndCheckout(null);
    setToRenderOnDropdown(getCities());

    setPlace({
      city: '',
      cityId: '',
      country: '',
      category: ''
     });

     setTemporaryPlace({
      city: '',
      cityId: '',
      country: '',
      category: ''
    });
  }

  // * Gerenciadores do motor de busca
  function handlePlace({ target }) {
    setTemporaryPlace(
      {
        city: target.value,
        cityId: null,
        cityCountry: '',
        category: ''
      }
    );
  }

  // useEffect para observar a largura da viewport e identificar o
  // tamanho do header em cada alteração // ! Modificar
  useEffect(() => {
    const { height } = document
      .querySelector('.header')
      .getBoundingClientRect();
    setHeaderHeight(height);
  }, [layoutWidth]);

  useEffect(() => {
    try {
      const citiesArray = getCities();
      setCities(citiesArray);
      renderDropdown(temporaryPlace, citiesArray, setToRenderOnDropdown);
    } catch (e) {
      console.error(e);
    }
  }, [temporaryPlace]);

  return (
    <>
      <Box
        position={isSmallerThan606 ? 'relative' : 'fixed'}
        pt={isSmallerThan606 ? `${headerHeight}px` : null}
        className={isSmallerThan606 ? null : 'header'}
        as={isSmallerThan606 ? null : 'header'}
        zIndex={99}
        right="0"
        top="0"
        w="100%"
      >
        <Box
          position={isSmallerThan606 ? 'fixed' : 'relative'}
          className={isSmallerThan606 ? 'header' : null}
          as={isSmallerThan606 ? 'header' : null}
          bg="var(--light-bege)"
          zIndex={100}
          py="0.5rem"
          maxH="56px"
          right="0"
          w="100%"
          top="0"
        >
          <Wrapper
            justifyContent="space-between"
            alignItems="center"
            display="flex">
            <Link to="/">
              <Image
                onClick={handleCleanRenderStates}
                borderRadius="0.25rem"
                fit="contain"
                src={logo5}
                maxH="40px"
              />
            </Link>
            {user.token ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Menu>
                  <MenuButton>
                    <Avatar
                      name={`${user.userName} ${user.userSurname}`}
                      bgColor="var(--hard-blue)"
                      color="#FFF"
                      size="sm"
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setUser({})}>
                      Encerrar sessão
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Box p="0 0.5rem" lineHeight="1rem">
                  <Text
                    fontFamily="Poppins, sans-serif"
                    display="block"
                    as="span"
                  >
                    Olá,{' '}
                  </Text>
                  <Text fontFamily="Poppins, sans-serif" color="var(--blue)">
                    {user.userName}
                  </Text>
                </Box>
              </Box>
            ) : (
              <Box>
                <Breadcrumb separator="|" fontSize="0.8rem">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      color="var(--blue)"
                      fontWeight="bold"
                      onClick={onOpen}
                    >
                      Iniciar sessão
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link to="/register">
                      <BreadcrumbLink fontWeight="bold" color="var(--blue)">
                        Criar conta
                      </BreadcrumbLink>
                    </Link>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Box>
            )}
          </Wrapper>
        </Box>
        <Box
          background="var(--light-blue)"
          flexDirection="column"
          paddingBottom="1rem"
          flexWrap="wrap"
          display="flex"
        >
          <Text
            textAlign="center"
            fontSize="1.75rem"
            color="#FFF"
            p="1rem"
            w="100%"
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
                ref={componentsVisible.inputCity.ref}
                colSpan={isSmallerThan606 ? 1 : 2}
                position="relative"
                zIndex={99}
                w="100%"
              >

                <InputHeader
                  value={handleInputCityValueController(temporaryPlace)}
                  onClick={() => componentsVisible.inputCity.open()}
                  placeholder="Para onde iremos?"
                  onChange={e => handlePlace(e)}
                  image={geolocalization}
                  postop="10px"
                />

                {componentsVisible.inputCity.isComponentVisible && (
                  <Box
                    borderRadius="0.25rem"
                    position="absolute"
                    lineHeight="1.3rem"
                    marginTop="2.8rem"
                    background="#FFF"
                    fontSize="1rem"
                    overflow="auto"
                    maxH="16rem"
                    w="100%"
                    top="0"
                  >

                    {toRenderOnDropdown.map((city) => (
                      <Box
                        key={city.cityName}
                      >
                        <Box
                          _hover={{ bgColor: 'var(--light-bege)' }}
                          onClick={() => {
                            setTemporaryPlace({
                              city: city.cityName,
                              cityId: city.id,
                              country: city.cityCountry,
                              category: ''
                            });
                            componentsVisible.inputCity.close();
                          }}
                          borderRadius="0.25rem"
                          cursor="pointer"
                          p="0.5rem 1rem"
                          tabIndex={0}
                        >
                          <HStack spacing={3} align="center">
                            <Image maxW="1rem" src={geolocalization} />
                            <VStack
                              align="flex-start"
                              justify="center"
                              spacing={0}
                            >
                              <Text
                                fontFamily="Poppins, sans-serif"
                                color="var(--hard-blue)"
                                fontWeight="bold"
                                fontSize="0.9rem"
                              >
                                {city.cityName}
                              </Text>
                              <HStack align="center">
                                <Text
                                  fontWeight="bold"
                                  color="gray.500"
                                  fontSize="xs"
                                  as="span"
                                >
                                  {city.cityCountry}
                                </Text>
                              </HStack>
                            </VStack>
                          </HStack>
                        </Box>
                        <Divider borderColor="var(--blue)" _last={{ borderColor: 'transparent' }} w="100%" />
                      </Box>
                    ))}
                  </Box>
                )}
              </GridItem>
              <GridItem
                ref={componentsVisible.inputCalendar.ref}
                colSpan={isSmallerThan606 ? 1 : 2}
                position="relative"
                zIndex={98}
                w="100%"
                >

                {componentsVisible.inputCalendar.isComponentVisible && (
                  <BasicCalendar position="absolute" marginTop="2.8rem" zIndex={98}>
                    <Grid gap="0.1rem" templateColumns="1fr 1fr">
                      <GridItem w="100%">
                        <BasicButton _hover={{ filter: 'brightness(0.9)' }} transition="all 0.1s ease-in-out" borderRadius="0 0.25rem 0.25rem 0.25rem" description="Limpar" onClick={() => setDateCheckinAndCheckout(null)} />
                      </GridItem>
                      <GridItem w="100%">
                        <BasicButton _hover={{ filter: 'brightness(0.9)' }} transition="all 0.1s ease-in-out" borderRadius="0.25rem 0 0.25rem 0.25rem" description="Aplicar" onClick={() => componentsVisible.inputCalendar.close()} />
                      </GridItem>
                    </Grid>
                  </BasicCalendar>
                )}

                <InputHeader
                  value={handleInputDateValueController(dateCheckinAndCheckout)}
                  onClick={() => componentsVisible.inputCalendar.open()}
                  placeholder="Check in - Check out"
                  image={calendar}
                  cursor="pointer"
                  readOnly
                />

              </GridItem>
              <GridItem colSpan={1} w="100%">
                <Link to={temporaryPlace.city ? `/results/cities/${temporaryPlace.cityId}` : '/results'}>
                  <BasicButton
                    _hover={{
                      background: 'var(--light-blue)',
                      border: '2px solid var(--blue)',
                    }}
                    transition="all 0.2s ease-in-out"
                    onClick={handleCardsOnDisplay}
                    description="Buscar"
                    id="btn-buscar"
                    w="100%"
                  />
                </Link>
              </GridItem>
            </Grid>
          </Wrapper>
        </Box>
      </Box>

      <DrawerLogin
        breakpoint={isSmallerThan606}
        onClose={onClose}
        isOpen={isOpen}
      />
      <Box pt={isSmallerThan606 ? null : `${headerHeight + 23.2}px`} />
      {children}
    </>
  );
}

export default Header;
