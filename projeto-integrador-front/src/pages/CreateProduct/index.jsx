import {
 Box, FormControl, Grid, GridItem, Text
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import Input from './components/Input';
import BasicButton from '../../components/BasicButton';
import baseApi from '../../services/service.baseApi';

function CreateProduct() {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  const [..._categories] = categories.map(cat => cat.categoryName);
  const [..._cities] = cities.map(city => city.cityName);
  console.log(_cities);

  useEffect(() => {
    try {
      baseApi.get('/cities').then(({ data }) => setCities(data));
      baseApi.get('/categories').then(({ data }) => setCategories(data));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Wrapper>
      <Text as="h1" color="var(--light-blue)">
        Administração de produtos
      </Text>
      <Formik
        initialValues={{
          productName: _cities[0],
          category: _categories[0],
          description: '',
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
                  flexDir="column"
                  gridColumn="1/2"
                  display="flex"
                  gap="1rem"
                >
                <Text as="h2">Criar acomodação</Text>
                  <Input
                    value={formik.values.productName}
                    inputLabel="Nome da acomodação"
                    htmlFor="productName"
                    name="productName"
                    id="productName"
                  />
                  <Input
                    inputLabel="Categoria"
                    htmlFor="category"
                    name="category"
                    id="category"
                    as="select"
                  >
                    {_categories.map(cat => (
                      <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                    ))}

                  </Input>
                  <Input
                    value={formik.values.city}
                    inputLabel="Cidade"
                    htmlFor="city"
                    name="city"
                    as="select"
                    id="city"
                   >
                     {_cities.map(city => (
                      <option key={city} value={city.toLowerCase()}>{city}</option>
                    ))}
                  </Input>
                  <Input
                    value={formik.values.description}
                    inputLabel="Descrição"
                    htmlFor="description"
                    name="description"
                    id="description"
                    as="textarea"
                    rows="15"
                    disabled
                  />
                </GridItem>
                <GridItem gridColumn="2/3" display="flex" flexDir="column">
                  <label htmlFor="productName">First Name</label>
                  <Field
                    id="productName"
                    name="productName"
                    placeholder="Jane"
                  />

                  <label htmlFor="category">Last Name</label>
                  <Field id="category" name="category" placeholder="Doe" />

                  <label htmlFor="city">Email</label>
                  <Field id="city" name="city" type="city" />
                  <button type="submit">Submit</button>
                </GridItem>
              </Grid>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default CreateProduct;
