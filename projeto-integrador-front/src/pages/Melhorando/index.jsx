// eslint-disable-next-line object-curly-newline
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Stack,
  Text,
  Tooltip,
  useMediaQuery,
  useRadioGroup,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { FolderSimpleMinus } from 'phosphor-react';
import Wrapper from '../../components/Wrapper';
import options from './options.customradio';
import CustomRadio from './CustomRadio';
import Input from './Input';
import atributes from '../CreateProduct/atributes';
import AtributeIcon from './Icon';
import InputWithButtons from './InputWithButtons';
import PlusButton from '../../assets/plus-button.svg';
import BasicButton from '../../components/BasicButton';
import url from '../../services/urls';
import baseApi from '../../services/service.baseApi';
import ModalSuccess from '../../components/ModalSuccess';

function Melhorando() {
  const [isSmallerThan715] = useMediaQuery('(max-width: 715px)');
  const [isSmallerThan992] = useMediaQuery('(max-width: 992px)');

  const attributes = atributes.slice(0);
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    name: 'image-category',
  });

  const placeCategory = useRadioGroup({
    name: 'place-category',
  });

  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [countBeds, setCountBeds] = useState(1);
  const [countRooms, setCountRooms] = useState(1);
  const [countGuests, setCountGuests] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  function addIcon({ values: { attributes: attr } }, newIcon, _name) {
    const found = attr.find(({ name }) => name === _name);

    if (found) return null;

    const attributeList = attributes?.find(attrib => attrib?.icon === newIcon);
    attributeList.selected = true;

    const newAtt = {
      name: _name,
      icon: newIcon,
      selected: true,
    };

    setSelectedAttributes([...attr, newAtt]);

    return newAtt;
  }

  const removeIcon = useCallback(
    // eslint-disable-next-line no-shadow
    (icon, { values }) => {
      const attributeList = attributes?.find(attrib => attrib?.icon === icon);
      attributeList.selected = false;
      const newAttrib = values.attributes.filter(
        arrayDeIcones => arrayDeIcones.icon !== icon
      );
      setSelectedAttributes(newAttrib);
      return newAttrib;
    },
    [setSelectedAttributes]
  );

  const handleCountPlus = useCallback(
    (setState, min, max) => {
      setState(prev => {
        if (prev >= min && prev < max) return prev + 1;
        return prev;
      });
    },
    [setCountBeds, setCountRooms, setCountGuests]
  );

  const handleCountMinus = useCallback(
    (setState, min, max) => {
      setState(prev => {
        if (prev > min && prev <= max) return prev - 1;
        return prev;
      });
    },
    [setCountBeds, setCountRooms]
  );

  const [category, setCategory] = useState([]);
  useEffect(() => {
    baseApi.get(url.CATEGORIES).then(({ data }) => setCategory(data));
  }, []);
  console.log(category);

  return (
    <Wrapper>
      <Text mt="1rem" as="h1">
        Administração de produtos
      </Text>
      <Formik
        initialValues={{
          category: 'default',
          imageCategory: '',
          adressNumber: '',
          description: '',
          productName: '',
          safetyRules: '',
          houseRules: '',
          attributes: [],
          imageURL: '',
          policies: '',
          zipcode: '',
          country: '',
          guests: '1',
          street: '',
          images: [],
          price: '',
          state: '',
          rooms: '1',
          beds: '1',
          city: '',
        }}
        onSubmit={values => {
          // eslint-disable-next-line no-alert
          alert(
            JSON.stringify(
              { ...values, attributes: selectedAttributes },
              false,
              2
            )
          );
        }}
      >
        {formik => (
          <Flex wrap="wrap" justify="center">
            <ModalSuccess open={openModal} msg="Cadastro efetuado com sucesso!" />;
            <Box
              gridTemplateColumns={{ base: '1fr', lg: 'repeat(5, 1fr)' }}
              display="grid"
              gap="2rem"
            >
              {!isSmallerThan992 && (
                <GridItem
                  backgroundImage="url(https://images.pexels.com/photos/90597/pexels-photo-90597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                  height={{ base: '230px', lg: 'auto' }}
                  bgRepeat="no-repeat"
                  borderRadius="lg"
                  bgSize="cover"
                  bgPos="center"
                  colStart={1}
                  rowSpan={2}
                  colEnd={3}
                  h="100%"
                  mt="4"
                  mb="2"
                >
                  <Heading
                    pt={{ base: '24', lg: '16' }}
                    color="#FFFF"
                    size="lg"
                    as="h3"
                    px="5"
                  >
                    {' '}
                    Qual tipo de espaço você vai hospedar?
                  </Heading>
                </GridItem>
              )}
              <GridItem
                maxH="50vh"
                colStart={isSmallerThan992 ? 1 : 3}
                colEnd={isSmallerThan992 ? 6 : 6}
              >
                <Stack
                  {...placeCategory.getRootProps()}
                  spacing="1.5rem"
                  justify="start"
                  direction="row"
                  align="center"
                >
                  <HStack padding="2rem 0">
                    {category.map(option => {
                      const radio = getRadioProps({ value: option.name });
                      return (
                        <CustomRadio
                          category={option.name}
                          image={option.image}
                          key={option.name}
                          {...radio}
                        />
                      );
                    })}
                  </HStack>
                </Stack>
                <Box gap="1rem" display="flex" flexDir="column">
                  <Grid gap={2} templateColumns="1fr 1fr 1fr">
                    <GridItem colStart={1} colSpan={2}>
                      <Input
                        {...formik.getFieldProps('productName')}
                        value={formik.values.productName}
                        inputlabel="Nome da acomodação"
                        border="1px solid var(--blue)"
                        htmlFor="productName"
                        name="productName"
                        id="productName"
                        padding="1rem"
                      />
                    </GridItem>
                    <GridItem>
                      <Input
                        {...formik.getFieldProps('price')}
                        value={formik.values.price}
                        inputlabel="Preço/noite"
                        border="1px solid var(--blue)"
                        htmlFor="price"
                        name="price"
                        id="price"
                        padding="1rem"
                      />
                    </GridItem>
                  </Grid>
                  <Input
                    {...formik.getFieldProps('description')}
                    value={formik.values.description}
                    border="1px solid var(--blue)"
                    placeholder="Escreva aqui..."
                    inputlabel="Descrição"
                    htmlFor="description"
                    name="description"
                    padding="1rem"
                    id="description"
                    as="textarea"
                    rows="3"
                  />
                </Box>
              </GridItem>

              <GridItem
                colStart={isSmallerThan992 ? 1 : 3}
                colEnd={isSmallerThan992 ? 6 : 6}
                border="1px solid var(--blue)"
                justifyContent="space-evenly"
                borderRadius="1rem"
                alignItems="center"
                flexDir="column"
                display="flex"
                m="9px 0"
                gap="1rem"
                p="0 1rem 2rem"
              >
                <Box alignSelf="start" p="1rem 0">
                  <Text m="0 0 1rem" as="h2">
                    Imagens
                  </Text>
                  <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    {...getRootProps()}
                    spacing="1.5rem"
                    justify="start"
                    align="start"
                  >
                    <HStack>
                      {options.map(option => {
                        const radio = getRadioProps({ value: option.category });
                        return (
                          <CustomRadio
                            category={option.category}
                            key={option.category}
                            image={option.img}
                            {...radio}
                          />
                        );
                      })}
                    </HStack>
                    <HStack w="100%">
                      <Input
                        placeholder="https://link-da-imagem.com"
                        value={formik.values.imageURL}
                        {...formik.getFieldProps}
                        htmlFor="imageURL"
                        name="imageURL"
                      />
                      <Tooltip label="Adicionar url">
                        <Image
                          alt="add url button"
                          src={PlusButton}
                          cursor="pointer"
                          h="100%"
                        />
                      </Tooltip>
                    </HStack>
                  </Stack>
                </Box>
                <Box>
                  <Text m="1rem 0" as="h2">
                    O que essa acomodação oferece?
                  </Text>
                  <HStack>
                    <Menu w="100%">
                      <MenuButton
                        bgColor="black"
                        padding="1rem"
                        color="white"
                        type="button"
                        rounded="xl"
                      >
                        Selecione os atributos
                      </MenuButton>
                      <MenuList>
                        {attributes.map(({ icon, name, selected }, index) => (
                          <MenuItem
                            onClick={() => {
                              formik.setFieldValue(
                                'attributes',
                                formik.values.attributes.concat(
                                  addIcon(formik, icon, name)
                                )
                              );
                            }}
                            key={`${index.toString()} + ${icon.toString()}`}
                            _hover={{ bgColor: 'var(--blue)' }}
                            bgColor={selected && 'green.200'}
                            justifyContent="space-between"
                            _focus={{ bgColor: 'none' }}
                            display="flex"
                            width="100%"
                          >
                            <Text>{name}</Text>
                            <Icon fontSize="1.5rem" as={icon} />
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                    <Box
                      justifyContent="center"
                      position="relative"
                      flexWrap="wrap"
                      display="flex"
                      padding="10px"
                      gap="2rem"
                    >
                      {selectedAttributes.map(({ icon, name }, index) => (
                        <Tooltip
                          key={`${index.toString()}${name}`}
                          placement="right-start"
                          shouldWrapChildren
                          label={name}
                        >
                          <AtributeIcon
                            name={name}
                            icon={icon}
                            index={index}
                            onClick={() => formik.setFieldValue(
                                'attributes',
                                removeIcon(icon, formik)
                              )}
                          />
                        </Tooltip>
                      ))}
                    </Box>
                  </HStack>
                  <Grid
                    templateColumns={{ base: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
                    direction={{ base: 'column', lg: 'row' }}
                    gap="2rem"
                    mt="1rem"
                  >
                    <GridItem>
                      <InputWithButtons
                        onChange={() => formik.setFieldValue('beds', countBeds.toString())}
                        inputlabelWithButtons="Camas"
                        value={countBeds}
                        htmlFor="beds"
                        name="beds"
                        id="beds"
                        readOnly
                        handleplus={() => {
                          handleCountPlus(setCountBeds, 1, 10);
                          formik.setFieldValue(
                            'beds',
                            (countBeds + 1).toString()
                          );
                        }}
                        handleminus={() => {
                          handleCountMinus(setCountBeds, 1, 10);
                          formik.setFieldValue(
                            'beds',
                            (countBeds - 1).toString()
                          );
                        }}
                      />
                    </GridItem>
                    <GridItem>
                      <InputWithButtons
                        inputlabelWithButtons="Quartos"
                        value={countRooms}
                        htmlFor="rooms"
                        name="rooms"
                        id="rooms"
                        readOnly
                        onChange={() => formik.setFieldValue('rooms', countRooms.toString())}
                        handleplus={() => {
                          handleCountPlus(setCountRooms, 1, 10);
                          formik.setFieldValue(
                            'rooms',
                            (countRooms + 1).toString()
                          );
                        }}
                        handleminus={() => {
                          handleCountMinus(setCountRooms, 1, 10);
                          formik.setFieldValue(
                            'rooms',
                            (countRooms - 1).toString()
                          );
                        }}
                      />
                    </GridItem>
                    <GridItem>
                      <InputWithButtons
                        tooltipLabel="Capacidade de pessoas"
                        inputlabelWithButtons="Capacidade"
                        htmlFor="guests"
                        name="guests"
                        id="guests"
                        readOnly
                        value={countGuests}
                        onChange={e => {
                          formik.setFieldValue(
                            'guests',
                            countGuests.toString()
                          );
                        }}
                        handleplus={() => {
                          handleCountPlus(setCountGuests, 1, 300);
                          formik.setFieldValue(
                            'guests',
                            (countGuests + 1).toString()
                          );
                        }}
                        handleminus={() => {
                          handleCountMinus(setCountGuests, 1, 300);
                          formik.setFieldValue(
                            'guests',
                            (countGuests - 1).toString()
                          );
                        }}
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>

              <GridItem
                maxH="70vh"
                colStart={1}
                colEnd={isSmallerThan992 ? 6 : 4}
              >
                <Text as="h2">Regras</Text>
                <Flex h="100%" justifyContent="center" dir="column" wrap="wrap">
                  <Box w="100%">
                    <Input
                      {...formik.getFieldProps('safetyRules')}
                      value={formik.values.safetyRules}
                      inputlabel="Saúde e segurança"
                      border="1px solid var(--blue)"
                      placeholder="Escreva aqui..."
                      htmlFor="safetyRules"
                      name="safetyRules"
                      id="safetyRules"
                      as="textarea"
                      rows="2"
                    />
                  </Box>
                  <Box w="100%">
                    <Input
                      {...formik.getFieldProps('policies')}
                      inputlabel="Política de cancelamento"
                      value={formik.values.policies}
                      border="1px solid var(--blue)"
                      placeholder="Escreva aqui..."
                      htmlFor="policies"
                      name="policies"
                      id="policies"
                      as="textarea"
                      rows="2"
                    />
                  </Box>
                  <Box w="100%">
                    <Input
                      {...formik.getFieldProps('houseRules')}
                      inputlabel="Regras do estabelecimento"
                      value={formik.values.houseRules}
                      border="1px solid var(--blue)"
                      placeholder="Escreva aqui..."
                      htmlFor="houseRules"
                      name="houseRules"
                      id="houseRules"
                      as="textarea"
                      rows="2"
                    />
                  </Box>
                </Flex>
              </GridItem>

              {!isSmallerThan992 && (
                <GridItem maxH="70vh" w="100%" colStart={4} colEnd={6}>
                  <Image
                    src="https://cdn.discordapp.com/attachments/998213274048933888/998213853886291978/01.jpg"
                    borderRadius="1rem"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </GridItem>
              )}
              <GridItem pb="2rem" colStart={1} colEnd={6}>
                <Text my="2rem" as="h2">
                  Informações de endereço
                </Text>
                <Grid gap="1rem" templateColumns="repeat(8, 1fr)">
                  <GridItem colStart={1} colEnd={isSmallerThan992 ? '-1' : '5'}>
                    <Input
                      {...formik.getFieldProps('street')}
                      placeholder="Avenida de exemplo"
                      border="1px solid var(--blue)"
                      value={formik.values.street}
                      inputlabel="Rua/Avenida"
                      htmlFor="street"
                      name="street"
                      id="street"
                      padding="1rem"
                    />
                  </GridItem>
                  <GridItem
                    colStart={isSmallerThan992 ? '1' : '5'}
                    colEnd={isSmallerThan992 ? '4' : '5'}
                  >
                    <Input
                      {...formik.getFieldProps('adressNumber')}
                      value={formik.values.adressNumber}
                      border="1px solid var(--blue)"
                      htmlFor="adressNumber"
                      name="adressNumber"
                      inputlabel="Número"
                      id="adressNumber"
                      placeholder="00"
                      padding="1rem"
                    />
                  </GridItem>
                  <GridItem
                    colStart={isSmallerThan992 ? '4' : '6'}
                    colEnd={isSmallerThan992 ? '9' : '9'}
                  >
                    <Input
                      {...formik.getFieldProps('zipcode')}
                      border="1px solid var(--blue)"
                      value={formik.values.zipcode}
                      inputlabel="CEP/Zipcode"
                      placeholder="00000-000"
                      htmlFor="zipcode"
                      name="zipcode"
                      id="zipcode"
                      padding="1rem"
                    />
                  </GridItem>
                  <GridItem
                    colStart={isSmallerThan992 ? '1' : '1'}
                    colEnd={isSmallerThan992 ? '9' : '5'}
                  >
                    <Input
                      {...formik.getFieldProps('city')}
                      border="1px solid var(--blue)"
                      value={formik.values.city}
                      placeholder="Minha Cidade"
                      inputlabel="Cidade"
                      padding="1rem"
                      htmlFor="city"
                      name="city"
                      id="city"
                    />
                  </GridItem>
                  <GridItem
                    colStart={isSmallerThan992 ? '1' : '5'}
                    colEnd={isSmallerThan992 ? '9' : '8'}
                  >
                    <Input
                      {...formik.getFieldProps('state')}
                      border="1px solid var(--blue)"
                      value={formik.values.state}
                      placeholder="Ex: Sâo Paulo"
                      inputlabel="Estado"
                      htmlFor="state"
                      padding="1rem"
                      name="state"
                      id="state"
                    />
                  </GridItem>
                  <GridItem
                    colStart={isSmallerThan992 ? '1' : '8'}
                    colEnd={isSmallerThan992 ? '-1' : '-1'}
                    alignContent="flex-end"
                    justifyContent="end"
                    flexDir="column"
                    display="flex"
                    h="100%"
                    colSpan={2}
                  >
                    <BasicButton
                      onClick={() => {
                        formik.handleSubmit();
                        setOpenModal(true);
                      }}
                      description="Enviar"
                      type="submit"
                      minH="55px"
                      h="59px"
                    />
                  </GridItem>
                </Grid>
              </GridItem>
            </Box>
          </Flex>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Melhorando;
