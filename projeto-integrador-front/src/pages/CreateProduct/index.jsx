import {
  Box,
  FormControl,
  Grid,
  GridItem,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import {
  useCallback, useEffect, useRef, useState
} from 'react';
import { GiSaveArrow } from 'react-icons/gi';
import Wrapper from '../../components/Wrapper';
import AtributeIcon from './components/Icon';
import Input from './components/Input';
import BasicButton from '../../components/BasicButton';
import baseApi from '../../services/service.baseApi';
import atributes from './atributes';

function CreateProduct() {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  const [images, setImages] = useState([]);

  const attributes = atributes.slice(0);

  function handleAttributes() {
    const [...selectedAttributesName] = selectedAttributes.map(
      attrib => attrib.name
    );
    return selectedAttributesName;
  }

  const selectedAttributesName = handleAttributes();

  function handleImage({ values }) {
    const imagesTemp = values.images.slice(0);
    const url = values.imageURL;

    const category = values.imageCategory;

    const find = imageObj => imageObj.title === category;
    const found = imagesTemp.find(find);
    if (found) {
      found.links.push(url);
      setImages(imagesTemp);
      return imagesTemp;
    }

    const newImages = [
      ...imagesTemp,
      {
        title: category,
        links: [url],
      },
    ];

    setImages(newImages);

    return newImages;
  }

  const [..._categories] = categories.map(cat => cat.categoryName);
  const [..._cities] = cities.map(city => city.cityName);

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

  useEffect(() => {
    try {
      baseApi.get('/cities').then(({ data }) => setCities(data));
      baseApi.get('/categories').then(({ data }) => setCategories(data));
    } catch (e) {
      console.error(`Erro: ${e}`);
    }
  }, []);

  function generateNumbersArray(number) {
    const array = [];
    for (let i = 1; i <= number; i += 1) {
      array.push(i);
    }
    return array;
  }

  return (
    <Wrapper
      justifyContent="center"
      flexDir="column"
      display="flex"
      padding="2rem 1rem"
    >
      <Text as="h1" color="var(--light-blue)">
        Administração de produtos
      </Text>
      <Formik
        initialValues={{
          description: '',
          productName: '',
          safetyRules: '',
          imageCategory: '',
          imageURL: '',
          houseRules: '',
          attributes: [],
          policies: '',
          category: 'default',
          images: [],
          price: '',
          street: '',
          adressNumber: '',
          zipcode: '',
          state: '',
          country: '',
          rooms: '',
          beds: '',
          guests: '',
          city: 'default',
        }}
        onSubmit={async values => {
          console.log(
            JSON.stringify(
              { ...values, attributes: selectedAttributesName },
              false,
              2
            )
          );
        }}
      >
        {formik => (
          <Form>
            <FormControl isRequired>
              <Grid
                gap="4rem"
                templateColumns={{
                  lg: 'repeat(2, 1fr)',
                  base: 'repeat(1, 1fr)',
                }}
              >
                <Grid
                  gap="4rem"
                  templateColumns={{
                  lg: 'repeat(2, 1fr)',
                  base: 'repeat(1, 1fr)',
                }}>
                <GridItem
                  h="fit-content"
                  bgColor="gray.300"
                  borderRadius="1rem"
                  flexDir="column"
                  display="flex"
                  gap="1rem"
                >
                  <Text p="1rem 0 0 1rem" as="h2">
                    Criar acomodação
                  </Text>
                  <Input
                    value={formik.values.productName}
                    inputlabel="Nome da acomodação"
                    htmlFor="productName"
                    name="productName"
                    id="productName"
                  />
                  <Box display="grid" gridTemplateColumns="1fr 1fr" gap="1rem">
                    <Input
                      {...formik.getFieldProps}
                      inputlabel="Categoria"
                      htmlFor="category"
                      name="category"
                      id="category"
                      as="select"
                    >
                      <Box
                        as="option"
                        value="default"
                        disabled
                        defaultValue
                        _readOnly
                      >
                        Selecione uma opção
                      </Box>
                      {_categories.map((cat, index) => (
                        <Box
                          {...formik.getFieldProps}
                          value={cat}
                          as="option"
                          key={cat}
                        >
                          {cat}
                        </Box>
                      ))}
                    </Input>
                  </Box>
                  <Input
                    value={formik.values.description}
                    inputlabel="Descrição"
                    htmlFor="description"
                    name="description"
                    id="description"
                    as="textarea"
                    rows="4"
                  />
                  <Text p="1rem" as="h2">
                    Imagens
                  </Text>
                  <Box display="grid" gridTemplateColumns="repeat(5, 1fr)">
                    <GridItem colSpan={2}>
                      <Input
                        grid
                        inputlabel="Categoria"
                        htmlFor="imageCategory"
                        name="imageCategory"
                        id="imageCategory"
                        as="select"
                        type="text"
                        placeholder="Selecione um item"
                        {...formik.getFieldProps}
                      >
                        <Box
                          as="option"
                          value="defaultValue"
                          disabled
                          defaultValue
                          _readOnly
                        >
                          Selecione uma categoria
                        </Box>
                        <Box as="option" value="header">
                          Imagem principal
                        </Box>
                        <Box as="option" value="jardins">
                          Jardins
                        </Box>
                        <Box as="option" value="piscinas">
                          Piscinas
                        </Box>
                      </Input>
                    </GridItem>
                    <GridItem colSpan="2">
                      <Input
                        value={formik.values.imageURL}
                        {...formik.getFieldProps}
                        inputlabel="Imagem URL"
                        htmlFor="imageURL"
                        name="imageURL"
                        id="imageURL"
                        type="text"
                        as="input"
                      />
                    </GridItem>
                    <GridItem alignSelf="center" colSpan={1}>
                      <Tooltip label="Salvar">
                        <Text as="span" p="1rem">
                          <IconButton
                            bgColor="transparent"
                            cursor="pointer"
                            as={GiSaveArrow}
                            fontSize="2rem"
                            onClick={() => {
                              formik.setFieldValue(
                                'images',
                                handleImage(formik)
                              );
                              formik.setFieldValue('imageURL', '');
                              formik.setFieldValue(
                                'imageCategory',
                                'defaultValue'
                              );
                            }}
                          />
                        </Text>
                      </Tooltip>
                    </GridItem>
                  </Box>
                  <Box p="0 1rem">
                    <Box
                      border="1px dashed blue"
                      flexWrap="wrap"
                      display="flex"
                      m="0 0 1rem"
                      gap="20px"
                      w="100%"
                      p="1rem"
                    >
                      {images.map((image, { image: { links } }) => links.map((link, index) => (
                        <Box key={`${index.toString()}a`}>
                          <Image w="100px" h="100px" src={link} />
                          <Text as="span">{image.title}</Text>
                        </Box>
                      )))}
                    </Box>
                  </Box>
                </GridItem>
                </Grid>
                <GridItem
                  borderRadius="0.25rem"
                  flexDir="column"
                  display="flex"
                  gap="1rem"
                >
                  <Text p="1rem 0 0 1rem" as="h2">
                    Quais são as características dessa acomodação?
                  </Text>
                  <Box
                    justifyContent="center"
                    bgColor="var(--blue)"
                    position="relative"
                    flexWrap="wrap"
                    display="flex"
                    padding="10px"
                    gap="2rem"
                  >
                    {selectedAttributes.map(({ icon, name }, index) => (
                      <Tooltip
                        key={`${index.toString()}${name}`}
                        placement="left-start"
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
                  <Menu w="100%">
                    <MenuButton
                      padding="1rem"
                      bgColor="black"
                      color="white"
                      type="button"
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
                  <Input
                    inputlabel="Regras do estabelecimento"
                    name="houseRules"
                    id="houseRules"
                    as="textarea"
                    {...formik.getFieldProps}
                  />
                  <Input
                    inputlabel="Saúde e segurança"
                    name="safetyRules"
                    id="safetyRules"
                    as="textarea"
                    {...formik.getFieldProps}
                  />
                  <Input
                    inputlabel="Política de cancelamento"
                    name="policies"
                    id="policies"
                    as="textarea"
                    {...formik.getFieldProps}
                  />
                  <Grid templateColumns="1fr 1fr 1fr 1fr">
                    <GridItem colStart={1}>
                      <Input
                        inputlabel="Quartos"
                        name="policies"
                        id="policies"
                        as="select"
                        {...formik.getFieldProps}
                      >
                        {generateNumbersArray(5).map((el) => (
                          <Box key={el.toString()} as="option">{el}</Box>
                        ))}
                      </Input>
                    </GridItem>
                    <GridItem>
                      <Input
                        inputlabel="Camas"
                        name="policies"
                        id="policies"
                        as="select"
                        {...formik.getFieldProps}
                      >
                        {generateNumbersArray(15).map((el) => (
                          <Box key={el.toString()} as="option">{el}</Box>
                        ))}
                      </Input>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        inputlabel="Capacidade"
                        name="policies"
                        id="policies"
                        as="select"
                        {...formik.getFieldProps}
                      >
                        {generateNumbersArray(30).map((el) => (
                          <Box key={el.toString()} as="option">{el} {el !== 1 ? 'pessoas' : 'pessoa'}</Box>
                        ))}
                      </Input>
                    </GridItem>
                    <GridItem>
                      <Input
                        inputlabel="Valor/noite"
                        name="price"
                        id="price"
                        type="number"
                        {...formik.getFieldProps} />
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem colSpan={{ base: '1', lg: '2' }}>
                  <Text p="0 1rem" as="h2">
                    Informações de endereço
                  </Text>
                  <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem colStart={1}>
                      <Input
                        value={formik.values.zipcode}
                        {...formik.getFieldProps}
                        inputlabel="CEP"
                        htmlFor="zipcode"
                        name="zipcode"
                        type="text"
                        id="zipcode"
                      />
                    </GridItem>
                    <GridItem colStart={2} colSpan={3}>
                      <Input
                        value={formik.values.street}
                        {...formik.getFieldProps}
                        inputlabel="Rua/Avenida"
                        htmlFor="street"
                        name="street"
                        type="text"
                        id="street"
                      />
                    </GridItem>
                    <GridItem>
                      <Input
                        value={formik.values.city}
                        {...formik.getFieldProps}
                        inputlabel="Cidade"
                        htmlFor="city"
                        name="city"
                        as="select"
                        id="city"
                      >
                        <Box as="option" _readOnly disabled defaultValue>
                          Selecione uma opção
                        </Box>
                        {_cities.map(city => (
                          <Box
                            as="option"
                            key={city}
                            value={city}
                          >
                            {city}
                          </Box>
                        ))}
                      </Input>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Input
                        value={formik.values.state}
                        {...formik.getFieldProps}
                        inputlabel="Estado"
                        htmlFor="state"
                        name="state"
                        type="text"
                        id="state"
                      />
                    </GridItem>
                    <GridItem>
                      <Input
                        value={formik.values.adressNumber}
                        {...formik.getFieldProps}
                        inputlabel="Número"
                        htmlFor="number"
                        name="number"
                        type="text"
                        id="number"
                      />
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
              <BasicButton description="Submit" />
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default CreateProduct;
