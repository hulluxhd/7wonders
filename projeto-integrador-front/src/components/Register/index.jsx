import {
  Input,
  FormControl,
  FormLabel,
  AlertIcon,
  AlertTitle,
  FormHelperText,
  Box,
  Alert,
  Spacer,
  Container,
  useMediaQuery,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import BasicButton from '../BasicButton';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputRegister from '../InputRegister';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Muito curto!')
    .max(15, 'Muito longo!')
    .required('Obrigatório'),
  lastName: Yup.string()
    .min(2, 'Muito curto!')
    .max(40, 'Muito longo!')
    .required(),
  email: Yup.string().email('Email invalido!').required('Obrigatório'),
  emailVerf: Yup.string()
    .email('Email invalido!')
    .required('Confirmação obrigatória')
    .oneOf([Yup.ref('email')], 'Use o mesmo endereço de email!'),
  password: Yup.string().required('Obrigatório'),
});

function Register() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        emailVerf: '',
        password: '',
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
    >
      {props => (
        <Container maxW="md">
          <Box display="flex" flexWrap="wrap" flexDirection="column" gap={4}>
            <Form onSubmit={props.handleSubmit}>
              <FormControl >
                <InputRegister
                  fieldDescription="Primeiro nome"
                  props={props}
                  fieldname="firstName"
                  errors={props.errors.firstName}
                  touched={props.touched.firstName}
                  placeholderDescription="firstName"
                  type="text"
                  errorColor="var(--blue)"
                />
                <InputRegister
                  fieldDescription="Último nome"
                  props={props}
                  fieldname="lastName"
                  errors={props.errors.lastName}
                  touched={props.touched.lastName}
                  placeholderDescription="lastName"
                  type="text"
                  errorColor="var(--blue)"
                />
                <InputRegister
                  fieldDescription="Email"
                  props={props}
                  fieldname="email"
                  errors={props.errors.email}
                  touched={props.touched.email}
                  placeholderDescription="email"
                  type="text"
                  errorColor="var(--blue)"
                />

                <FormHelperText>
                  Seu email não será compartilhado.
                </FormHelperText>

                <InputRegister
                  fieldDescription="Repita seu email"
                  props={props}
                  fieldname="emailVerf"
                  errors={props.errors.emailVerf}
                  touched={props.touched.emailVerf}
                  placeholderDescription="emailVerf"
                  type="text"
                  errorColor="var(--blue)"
                />
                <InputRegister 
                  fieldDescription="Senha"
                  props={props}
                  fieldname="password"
                  errors={props.errors.password}
                  touched={props.touched.password}
                  placeholderDescription="password"
                  type="password"
                  errorColor="var(--blue)"
                />
              </FormControl>

              <BasicButton
                type="submit"
                description="Registrar"
                w={isSmallerThan606 ? '80%' : '30%'}
                ml={isSmallerThan606 ? null : '1rem'}
                transition="all 0.2s ease-in-out"
                _hover={{
                  background: 'transparent',
                  color: 'var(--hard-blue)',
                  border: '2px solid var(--blue)',
                }}
              />
            </Form>
          </Box>
          <Box
            display="flex"
            m={4}
            gap={1}
            flexDir={isSmallerThan606 ? 'column' : 'row'}
          >
            <Spacer />
            <BasicButton
              description="Entrar"
              w={isSmallerThan606 ? '80%' : '30%'}
              ml={isSmallerThan606 ? null : '1rem'}
              transition="all 0.2s ease-in-out"
              _hover={{
                background: 'var(--light-blue)',
                border: '2px solid var(--blue)',
              }}
            />
          </Box>
        </Container>
      )}
    </Formik>
  );
}
export default Register;
