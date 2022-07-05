import {
 Box, Grid, GridItem, Text
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Wrapper from '../../components/Wrapper';
import Input from './components';

function CreateProduct() {
  return (
    <Wrapper>
      <Text as="h1" color="var(--light-blue)">
        Administração de produtos
      </Text>
      <Formik
        initialValues={{
          productName: '',
          category: '',
          city: '',
          description: '',
        }}
        onSubmit={async values => {
          // eslint-disable-next-line no-promise-executor-return
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {formik => (
          <Form>
            <Grid gap="4rem">
              <GridItem gridColumn="1/2" display="flex" flexDir="column" gap="1rem">
                <Input
                  htmlFor="productName"
                  id="productName"
                  name="productName"
                  inputLabel="Nome da acomodação"
                />
                <label htmlFor="category">Last Name</label>
                <Field id="category" name="category" placeholder="Doe" />

                <label htmlFor="city">Email</label>
                <Field id="city" name="city" type="city" />
                <button type="submit">Submit</button>
              </GridItem>
              <GridItem gridColumn="2/3" display="flex" flexDir="column">
                <label htmlFor="productName">First Name</label>
                <Field id="productName" name="productName" placeholder="Jane" />

                <label htmlFor="category">Last Name</label>
                <Field id="category" name="category" placeholder="Doe" />

                <label htmlFor="city">Email</label>
                <Field id="city" name="city" type="city" />
                <button type="submit">Submit</button>
              </GridItem>
              <GridItem gridColumn="3/4" display="flex" flexDir="column">
                <label htmlFor="productName">First Name</label>
                <Field id="productName" name="productName" placeholder="Jane" />

                <label htmlFor="category">Last Name</label>
                <Field id="category" name="category" placeholder="Doe" />

                <label htmlFor="city">Email</label>
                <Field id="city" name="city" type="city" />
                <button type="submit">Submit</button>
              </GridItem>
            </Grid>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default CreateProduct;
