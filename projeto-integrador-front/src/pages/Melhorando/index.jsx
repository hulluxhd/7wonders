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
  Stack,
  Text,
  Tooltip,
  useRadioGroup,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useCallback, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import options from './options.customradio';
import CustomRadio from './CustomRadio';
import Input from './Input';
import PlusButtom from '../../assets/plus-button.svg';
import atributes from '../CreateProduct/atributes';
import AtributeIcon from './Icon';

function Melhorando() {
  const attributes = atributes.slice(0);
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    name: 'categories',
  });

  const [selectedAttributes, setSelectedAttributes] = useState([]);

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

  return (
    <Wrapper>
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
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
            <GridItem margin="0 auto" h="80vh">
              <Image
                h="100%"
                objectFit="cover"
                src="https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg"
              />
            </GridItem>
            <GridItem h="80vh">
              <Box p="1rem 0 2rem">
                <Text m="0 0 1rem" as="h2">
                  Imagens
                </Text>
                <Stack
                  direction="row"
                  align="center"
                  justify="start"
                  spacing="1.5rem"
                  {...getRootProps()}
                >
                  <HStack>
                    {options.map(option => {
                      const radio = getRadioProps({ value: option.category });
                      return (
                        <CustomRadio
                          key={option.category}
                          image={option.img}
                          category={option.category}
                          {...radio}
                        />
                      );
                    })}
                  </HStack>
                  <HStack>
                    <Input
                      {...formik.getFieldProps}
                      name="imageURL"
                      htmlFor="imageURL"
                      value={formik.values.imageURL}
                      placeholder="https://link-da-imagem.com"
                    />
                    <Tooltip label="Adicionar url">
                      <Image
                        h="100%"
                        src={PlusButtom}
                        alt="add url button"
                        cursor="pointer"
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
                      padding="1rem"
                      rounded="xl"
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
              </Box>
            </GridItem>
          </Grid>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Melhorando;
