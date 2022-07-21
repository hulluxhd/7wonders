// eslint-disable-next-line object-curly-newline
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
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
import { useCallback, useState } from 'react';
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

  return (
    <Wrapper>
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
            <Box
              gridTemplateColumns={{ base: '1fr', lg: 'repeat(5, 1fr)' }}
              display="grid"
              gap="2rem"
            >
              {!isSmallerThan992 && (
                <GridItem m="2rem 0" h="75vh" colStart={1} colSpan={2}>
                  <Image
                    src="https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg"
                    borderRadius="1rem"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </GridItem>
              )}
              <GridItem
                border="1px solid var(--blue)"
                justifyContent="center"
                borderRadius="1rem"
                alignItems="start"
                flexDir="column"
                display="flex"
                m="2rem 0"
                gap="1rem"
                p="0 4rem"
                colStart={isSmallerThan992 ? 1 : 3}
                colSpan={isSmallerThan992 ? 5 : 3}
              >
                <Box p="1rem 0 2rem">
                  <Text m="0 0 1rem" as="h2">
                    Imagens
                  </Text>
                  <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    {...getRootProps()}
                    spacing="1.5rem"
                    justify="start"
                    align="center"
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
                    <HStack>
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
                    spacing="2rem"
                    mt="1rem"
                  >
                    <GridItem>
                      <InputWithButtons
                        inputlabelWithButtons="Camas"
                        value={countBeds}
                        htmlFor="beds"
                        name="beds"
                        id="beds"
                        readOnly
                        onChange={() => formik.setFieldValue('beds', countBeds.toString())}
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

              <GridItem h="80vh" colStart={1} colEnd={isSmallerThan715 ? 6 : 4}>
                <Text as="h2">Regras</Text>
                <Flex gap="4rem" dir="column" wrap="wrap">
                  <Box w="100%">
                    <Input
                      value={formik.values.safetyRules}
                      inputlabel="Saúde e segurança"
                      border="1px solid var(--blue)"
                      placeholder="Escreva aqui..."
                      {...formik.getFieldProps('safetyRules')}
                      htmlFor="safetyRules"
                      name="safetyRules"
                      id="safetyRules"
                      as="textarea"
                    />
                  </Box>
                  <Box w="100%">
                    <Input
                      inputlabel="Política de cancelamento"
                      value={formik.values.policies}
                      border="1px solid var(--blue)"
                      placeholder="Escreva aqui..."
                      {...formik.getFieldProps('policies')}
                      htmlFor="policies"
                      name="policies"
                      id="policies"
                      as="textarea"
                    />
                  </Box>
                  <Box w="100%">
                    <Input
                      inputlabel="Regras do estabelecimento"
                      value={formik.values.houseRules}
                      border="1px solid var(--blue)"
                      placeholder="Escreva aqui..."
                      {...formik.getFieldProps('houseRules')}
                      htmlFor="houseRules"
                      name="houseRules"
                      id="houseRules"
                      as="textarea"
                    />
                  </Box>
                </Flex>
              </GridItem>
              {!isSmallerThan715 && (
                <GridItem w="100%" colStart={4} colEnd={6} h="80vh">
                  <Image
                    src="https://cdn.discordapp.com/attachments/998213274048933888/998213853886291978/01.jpg"
                    borderRadius="1rem"
                    w="100%"
                    objectFit="cover"
                    h="100%"
                  />
                </GridItem>
              )}
              <GridItem pb="2rem" colStart={1} colEnd={6}>
                <Text my="2rem" as="h2">Informações de endereço</Text>
                <Grid gap="1rem" templateColumns={{ base: '1fr', lg: 'repeat(8, 1fr)' }}>
                  <GridItem colStart={1} colSpan={4}>
                    <Input
                      padding="1rem"
                      inputlabel="Rua/Avenida"
                      value={formik.values.street}
                      border="1px solid var(--blue)"
                      placeholder="Avenida de exemplo"
                      {...formik.getFieldProps('street')}
                      htmlFor="street"
                      name="street"
                      id="street"
                    />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Input
                      padding="1rem"
                      inputlabel="Número"
                      value={formik.values.adressNumber}
                      border="1px solid var(--blue)"
                      placeholder="00"
                      {...formik.getFieldProps('adressNumber')}
                      htmlFor="adressNumber"
                      name="adressNumber"
                      id="adressNumber"
                    />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Input
                      padding="1rem"
                      inputlabel="CEP/Zipcode"
                      value={formik.values.zipcode}
                      border="1px solid var(--blue)"
                      placeholder="00000-000"
                      {...formik.getFieldProps('zipcode')}
                      htmlFor="zipcode"
                      name="zipcode"
                      id="zipcode"
                    />
                  </GridItem>
                  <GridItem colStart={1} colSpan={3}>
                    <Input
                      padding="1rem"
                      inputlabel="Cidade"
                      value={formik.values.city}
                      border="1px solid var(--blue)"
                      placeholder="Minha Cidade"
                      {...formik.getFieldProps('city')}
                      htmlFor="city"
                      name="city"
                      id="city"
                    />
                  </GridItem>
                  <GridItem colStart={4} colSpan={3}>
                    <Input
                      padding="1rem"
                      inputlabel="Estado"
                      value={formik.values.state}
                      border="1px solid var(--blue)"
                      placeholder="Ex: Sâo Paulo"
                      {...formik.getFieldProps('state')}
                      htmlFor="state"
                      name="state"
                      id="state"
                    />
                  </GridItem>
                  <GridItem h="100%" display="flex" flexDir="column" justifyContent="end" alignContent="flex-end" colSpan={2}>
                    <BasicButton type="submit" onClick={formik.handleSubmit} minH="55px" h="59px" description="Enviar" />
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
