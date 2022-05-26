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
  useToast,
  Link,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import BasicButton from '../BasicButton';
import InputRegister from '../InputRegister';

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
  emailVerf: Yup.string()
    .email('Email invalido!')
    .required('Confirmação obrigatória')
    .oneOf([Yup.ref('email')], 'Use o mesmo endereço de email!'),
  password: Yup.string()
    .min(4, 'Use no mínimo 4 caracteres')
    .required('Obrigatório'),
});

function Register() {
  // breakpoint de 606px. Possibilidade de alteração
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  // variável que armazena os dados da confirmação do cadastro
  const toast = useToast();

  return (
    <Box p="1rem">
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          emailVerf: '',
          password: '',
        }}
        // função para capturar os valores dos inputs
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          });
        }}
      >
        {props => (
          <Container maxW="md" bgColor="#FFF">
            <Box display="flex" flexWrap="wrap" flexDirection="column">
              <Form onSubmit={props.handleSubmit}>
                <FormControl>
                  <InputRegister
                    fieldDescription="Nome"
                    props={props}
                    fieldname="firstName"
                    errors={props.errors.firstName}
                    touched={props.touched.firstName}
                    type="text"
                    errorColor="var(--red)"
                  />
                  <InputRegister
                    fieldDescription="Sobrenome"
                    props={props}
                    fieldname="lastName"
                    errors={props.errors.lastName}
                    touched={props.touched.lastName}
                    type="text"
                    errorColor="var(--red)"
                  />
                  <InputRegister
                    fieldDescription="Email"
                    props={props}
                    fieldname="email"
                    errors={props.errors.email}
                    touched={props.touched.email}
                    type="text"
                    errorColor="var(--red)"
                  />
                  <InputRegister
                    fieldDescription="Confirme seu email"
                    props={props}
                    fieldname="emailVerf"
                    errors={props.errors.emailVerf}
                    touched={props.touched.emailVerf}
                    type="text"
                    errorColor="var(--red)"
                  />
                  <InputRegister
                    fieldDescription="Senha"
                    props={props}
                    fieldname="password"
                    errors={props.errors.password}
                    touched={props.touched.password}
                    type="password"
                    errorColor="var(--red)"
                  />
                </FormControl>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  m={4}
                  flexDir={isSmallerThan606 ? 'column' : 'row'}
                >
                  <BasicButton
                    type="submit"
                    description="Registrar"
                    w={isSmallerThan606 ? '80%' : '40%'}
                    ml={isSmallerThan606 ? null : '1rem'}
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      background: 'transparent',
                      color: 'var(--hard-blue)',
                      border: '2px solid var(--blue)',
                    }}
                    onClick={() => toast({
                      title: 'Account created.',
                      description: "We've created your account for you.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })}
                  />
                </Box>
              </Form>
              <Box display="flex" justifyContent="center" m={2}>
                <Text fontSize="sm">
                  Já tem uma conta?
                  <Link to="/register" color="var(--blue)" fontSize="sm">
                    {' '}
                    Login
                  </Link>
                </Text>
              </Box>
            </Box>
          </Container>
        )}
      </Formik>
    </Box>
  );
}
export default Register;
