import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Radio,
  RadioGroup,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputRegister from '../../Register/components/InputRegister';

// regras  e errors para validação dos inputs
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Muito curto!')
    .max(15, 'Muito longo!')
    .required('Obrigatório'),
  lastName: Yup.string()
    .min(2, 'Muito curto!')
    .max(40, 'Muito longo!')
    .required('Obrigatório'),
  email: Yup.string().email('Email invalido!').required('Obrigatório'),
  city: Yup.string()
    .required('Obrigatório'),
});

function FormReserve() {
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      city: '',
    }}
    >
      {props => (
        <Box
          padding="6"
          borderRadius="lg"
          bgColor="#fff"
          shadow="lg"
        >
          <Form>
            <FormControl>
              <FormLabel
                color="var(--hard-blue)"
                lineHeight="1.75rem"
                fontWeight="600"
                fontSize="lg"
                p="1"
              >
                Para quem é esta reserva?
              </FormLabel>
              <RadioGroup>
                <VStack spacing="1" align="flex-start" fontWeight="100">
                  <Radio size="sm" value="usuario">Eu sou o hóspede principal</Radio>
                  <Radio size="sm" value="visitante">Reservando para outra pessoa</Radio>
                </VStack>
              </RadioGroup>
              <Grid templateColumns="repeat(4, 1fr)" gap={{ base: '1', md: '4' }}>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  <InputRegister
                    fieldDescription="Nome"
                    props={props}
                    fieldname="firstName"
                    errors={props.errors.firstName}
                    touched={props.touched.firstName}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  <InputRegister
                    fieldDescription="Sobrenome"
                    props={props}
                    fieldname="lastName"
                    errors={props.errors.lastName}
                    touched={props.touched.lastName}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  <InputRegister
                    fieldDescription="Email"
                    props={props}
                    fieldname="email"
                    errors={props.errors.email}
                    touched={props.touched.email}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  <InputRegister
                    fieldDescription="Cidade"
                    props={props}
                    fieldname="city"
                    errors={props.errors.city}
                    touched={props.touched.city}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
              </Grid>
            </FormControl>
          </Form>
        </Box>
      )}
    </Formik>
  );
}

export default FormReserve;
