import {
  Box,
  FormControl,
  FormLabel,
  VStack,
  RadioGroup,
  Grid,
  GridItem,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import InputRegister from '../../Register/components/InputRegister';
import { InfoContext } from '../../../contexts/InfoContext';

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
  city: Yup.string().required('Obrigatório'),
  guest: Yup.string().required('Obrigatório'),
});

function FormReserve() {
  const { user } = useContext(InfoContext);
  const [guest, setGuest] = useState('usuario');
  const { name, surname, email } = user;
  const navigate = useNavigate();

  console.log(guest);

  /* useEffect(() => {
    if (!name) {
      navigate('/register');
    }
  }, [name]); */

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        guest: 'usuario',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {props => (
        <Box
          borderRadius="lg"
          color="#3F0D0C"
          bgColor="#fff"
          padding="6"
          shadow="lg"
        >
          <Form>
            <FormControl>
              <FormLabel
                lineHeight="1.75rem"
                fontWeight="600"
                fontSize="lg"
                p="1"
              >
                {console.log(props.values.firstName)}
                Para quem é esta reserva?
              </FormLabel>
              <RadioGroup
                {...props.getFieldProps}
                defaultValue="usuario"
                color="#696969"
                name="guest"
                id="guest"
              >
                <VStack spacing="2" align="flex-start" fontWeight="100">
                  <label>
                    <Field
                      value="usuario"
                      type="radio"
                      name="guest"
                      id="guest"
                      onClick={() => setGuest('usuario')}
                    />
                    Eu sou o hóspede principal
                  </label>
                  <label>
                    <Field
                      value="visitante"
                      type="radio"
                      name="guest"
                      id="guest"
                      onClick={() => setGuest('visitante')}
                    />
                    Eu vou reservar para alguém
                  </label>
                </VStack>
              </RadioGroup>
              <Grid
                templateColumns="repeat(4, 1fr)"
                gap={{ base: '1', md: '4' }}
              >
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  {guest === 'visitante' ? (
                    <InputRegister
                      touched={props.touched.firstName}
                      errors={props.errors.firstName}
                      value={props.values.firstName}
                      fieldDescription="Nome"
                      errorColor="var(--red)"
                      fieldname="firstName"
                      props={props}
                      type="text"
                    />
                  ) : (
                    name && (
                      <InputRegister
                        fieldDescription="Nome"
                        errorColor="var(--red)"
                        fieldname="firstName"
                        bgColor="gray.200"
                        props={props}
                        value={name}
                        _readOnly
                        type="text"
                      />
                    )
                  )}
                </GridItem>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  {guest === 'visitante' ? (
                    <InputRegister
                      touched={props.touched.lastName}
                      errors={props.errors.lastName}
                      fieldDescription="Sobrenome"
                      errorColor="var(--red)"
                      fieldname="lastName"
                      props={props}
                      value={props.values.lastName}
                      type="text"
                    />
                  ) : (
                    surname && (
                      <InputRegister
                        fieldDescription="Sobrenome"
                        errorColor="var(--red)"
                        fieldname="lastName"
                        bgColor="gray.200"
                        value={surname}
                        props={props}
                        type="text"
                        _readOnly
                      />
                    )
                  )}
                </GridItem>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  {guest === 'visitante' ? (
                    <InputRegister
                      touched={props.touched.email}
                      errors={props.errors.email}
                      value={props.values.email}
                      fieldDescription="E-mail"
                      errorColor="var(--red)"
                      fieldname="email"
                      props={props}
                      type="text"
                    />
                  ) : (
                    email && (
                      <InputRegister
                        fieldDescription="E-mail"
                        errorColor="var(--red)"
                        bgColor="gray.200"
                        fieldname="email"
                        props={props}
                        value={email}
                        type="text"
                        _readOnly
                      />
                    )
                  )}
                </GridItem>
                <GridItem colSpan={{ base: '4', md: '2' }}>
                  <InputRegister
                    fieldDescription="Cidade de origem"
                    touched={props.touched.city}
                    errors={props.errors.city}
                    errorColor="var(--red)"
                    fieldname="city"
                    props={props}
                    type="text"
                  />
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
