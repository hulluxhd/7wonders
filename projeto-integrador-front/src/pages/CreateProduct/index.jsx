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
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import Wrapper from '../../components/Wrapper';
import Input from './components/Input';
import BasicButton from '../../components/BasicButton';
import baseApi from '../../services/service.baseApi';
import atributes from './atributes';

function CreateProduct() {
  const [selectedAtributes, setSelectedAtributes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

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

  function removeIcon(icon) {
    setSelectedAtributes(prev => prev.filter(arrayDeIcones => arrayDeIcones.icon !== icon));
    const atributeList = atributes?.find(atrib => atrib?.icon === icon);
    atributeList.selected = false;
  }

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
          houseRules: '',
          policies: '',
          category: '',
          city: '',
        }}
        onSubmit={async values => {
          // eslint-disable-next-line no-promise-executor-return
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
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
                      <Box as="option" _readOnly>
                        Selecione uma opção
                      </Box>
                      {_categories.map(cat => (
                        <Box
                          as="option"
                          key={cat}
                          {...formik.getFieldProps}
                          value={cat.toLowerCase()}
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
                      <Box
                        key={`${name}${index.toString()}`}
                        justifyContent="center"
                        position="relative"
                        alignItems="center"
                        flexDir="column"
                        display="flex"
                      >
                        <Icon boxSize="2rem" as={icon} display="block" />
                        <IconButton
                          _hover={{ background: 'transparent' }}
                          onClick={() => removeIcon(icon)}
                          background="transparent"
                          as={IoMdCloseCircle}
                          position="absolute"
                          cursor="pointer"
                          color="red.400"
                          boxSize="1rem"
                          right={-2}
                          top={-1}
                        />
                        <Text as="span">{name}</Text>
                      </Box>
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
                          bgColor={selected && 'green.200'}
                          justifyContent="space-between"
                          key={index.toString() + icon}
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
