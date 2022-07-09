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
  Flex,
  IconButton,
  Divider,
  Image,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import {
 useCallback, useEffect, useRef, useState
} from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import Wrapper from '../../components/Wrapper';
import AtributeIcon from './components/Icon';
import Input from './components/Input';
import BasicButton from '../../components/BasicButton';
import baseApi from '../../services/service.baseApi';
import atributes from './atributes';

function CreateProduct() {
  const teste = useRef(null);
  const [selectedAtributes, setSelectedAtributes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  const [images, setImages] = useState([]);

  function handleImage({ values }) {
    const imagesTemp = values.images.slice(0);
    const url = values.imageURL;

    const category = values.imageCategory;

    const find = (el) => el.category === category;

    if (imagesTemp.findIndex(find) !== -1) {
      const found = imagesTemp.find(imageObj => imageObj.category === category);
      if (found) {
        found.url.push(url);
        return imagesTemp;
      }
    }

    return [
      ...imagesTemp,
      {
        title: category,
        links: [url],
      }
    ];
  }

  const [..._categories] = categories.map(cat => cat.categoryName);
  const [..._cities] = cities.map(city => city.cityName);

  function addIcon(selected, newIcon, name) {
    const found = selected.find(({ icon }) => icon === newIcon);
    if (found) return null;

    const atributeList = atributes?.find(atrib => atrib?.icon === newIcon);
    atributeList.selected = true;
    return setSelectedAtributes(prev => [
      ...prev,
      {
        name: name,
        icon: newIcon,
        selected: true,
      },
    ]);
  }

  const removeIcon = useCallback(
    icon => {
      setSelectedAtributes(prev => prev.filter(arrayDeIcones => arrayDeIcones.icon !== icon));
      const atributeList = atributes?.find(atrib => atrib?.icon === icon);
      atributeList.selected = false;
    },
    [setSelectedAtributes]
  );

  useEffect(() => {
    try {
      baseApi.get('/cities').then(({ data }) => setCities(data));
      baseApi.get('/categories').then(({ data }) => setCategories(data));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Wrapper
      justifyContent="center"
      bgColor="gray.100"
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
          atributes: [],
          policies: '',
          category: '',
          images: [],
          city: '',
        }}
        onSubmit={async values => {
          console.log(JSON.stringify(values, false, 2));
        }}
      >
        {formik => (
          <Form>
            <FormControl isRequired>
              <Grid gap="4rem">
                <GridItem
                  borderRadius="0.25rem"
                  gridColumn="1/2"
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
                      inputlabel="Categoria"
                      htmlFor="category"
                      name="category"
                      id="category"
                      as="select"
                    >
                      <Box as="option" value="default" _readOnly>
                        Selecione uma opção
                      </Box>
                      {_categories.map(cat => (
                        <Box
                          {...formik.getFieldProps}
                          value={cat.toLowerCase()}
                          as="option"
                          key={cat}
                        >
                          {cat}
                        </Box>
                      ))}
                    </Input>
                    <Input
                      value={formik.values.city}
                      inputlabel="Cidade"
                      htmlFor="city"
                      name="city"
                      as="select"
                      id="city"
                    >
                      <Box as="option" _readOnly>
                        Selecione uma opção
                      </Box>
                      {_cities.map(city => (
                        <Box as="option" key={city} value={city.toLowerCase()}>
                          {city}
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
                        <Box as="option" value="default" _readOnly>
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
                        inputlabel="Imagem URL"
                        htmlFor="imageURL"
                        name="imageURL"
                        value={formik.values.imageURL}
                        {...formik.getFieldProps}
                        id="imageURL"
                        as="input"
                        type="text"
                      />
                    </GridItem>
                    <GridItem alignSelf="end" colSpan={1}>
                      <Tooltip label="Salvar">
                        <Text as="span">
                          <BasicButton
                            description="Salvar"
                            onClick={() => {
                            formik.setFieldValue(
                            'images',
                            handleImage(formik)
                          );
                          formik.setFieldValue(
                            'imageURL',
                            ''
                          );
                          formik.setFieldValue(
                            'imageCategory',
                            'default'
                          );
}} />
                        </Text>
                      </Tooltip>
                    </GridItem>
                  </Box>
                  <Box
                    w="100%"
                    display="flex"
                    gap="20px"
                    p="15px"
                    border="1px dashed blue"
                  >
                    {images.map((image, index) => (
                      <Image
                        key={`${index.toString()}a`}
                        w="200px"
                        h="200px"
                        src={image.path}
                      />
                    ))}
                  </Box>
                </GridItem>
                <GridItem
                  borderRadius="0.25rem"
                  flexDir="column"
                  gridColumn="2/3"
                  display="flex"
                  gap="1rem"
                >
                  <Text p="1rem 0 0 1rem" as="h2">
                    Quais são as características dessa acomodação?
                  </Text>
                  <Box
                    position="relative"
                    flexWrap="wrap"
                    display="flex"
                    gap="1rem"
                  >
                    {selectedAtributes.map(({ icon, name }, index) => (
                      <Text as="span">
                        <AtributeIcon
                          name={name}
                          icon={icon}
                          index={index}
                          onClick={() => removeIcon(icon)}
                        />
                      </Text>
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
                      {atributes.map(({ icon, name, selected }, index) => (
                        <MenuItem
                          onClick={() => addIcon(selectedAtributes, icon, name)}
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
