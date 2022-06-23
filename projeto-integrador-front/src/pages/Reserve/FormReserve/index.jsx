import {
    Box,
    FormControl,
} from '@chakra-ui/react';
import React from 'react';
import { Formik, Form } from 'formik';
import InputRegister from '../../Register/components/InputRegister';

function FormReserve() {
  return (
    <Formik
      initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          city: '',
        }}
      >
        {props => (
          <Box
            padding="4"
            borderRadius="lg"
            bgColor="#fff"
          >
            <Form>
              <FormControl>
                <Box display="flex" flexDirection="row" gap={4}>
                  <InputRegister
                    fieldDescription="Nome"
                    props={props}
                    fieldname="firstName"
                    errors={props.errors.firstName}
                    touched={props.touched.firstName}
                    type="text"
                    errorColor="var(--red)" />
                  <InputRegister
                    fieldDescription="Sobrenome"
                    props={props}
                    fieldname="lastName"
                    errors={props.errors.lastName}
                    touched={props.touched.lastName}
                    type="text"
                    errorColor="var(--red)" />
                </Box>
                <Box display="flex" flexDirection="row" gap={4}>
                  <InputRegister
                    fieldDescription="Email"
                    props={props}
                    fieldname="email"
                    errors={props.errors.email}
                    touched={props.touched.email}
                    type="text"
                    errorColor="var(--red)" />
                  <InputRegister
                    fieldDescription="Cidade"
                    props={props}
                    fieldname="city"
                    errors={props.errors.city}
                    touched={props.touched.city}
                    type="text"
                    errorColor="var(--red)" />
                </Box>
              </FormControl>
            </Form>
          </Box>
        )}
    </Formik>
  );
}

export default FormReserve;
