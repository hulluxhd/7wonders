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
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem colSpan="2">
                  <InputRegister
                    fieldDescription="Nome"
                    props={props}
                    fieldname="firstName"
                    errors={props.errors.firstName}
                    touched={props.touched.firstName}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
                <GridItem colSpan="2">
                  <InputRegister
                    fieldDescription="Sobrenome"
                    props={props}
                    fieldname="lastName"
                    errors={props.errors.lastName}
                    touched={props.touched.lastName}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
                <GridItem colSpan="2">
                  <InputRegister
                    fieldDescription="Email"
                    props={props}
                    fieldname="email"
                    errors={props.errors.email}
                    touched={props.touched.email}
                    type="text"
                    errorColor="var(--red)" />
                </GridItem>
                <GridItem colSpan="2">
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
