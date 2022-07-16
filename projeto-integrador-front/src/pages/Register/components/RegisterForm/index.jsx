import {
  FormControl,
  Box,
  Container,
  useMediaQuery,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import BasicButton from '../../../../components/BasicButton';
import InputPassword from '../InputPassword';
import InputRegister from '../InputRegister';
import baseApi from '../../../../services/service.baseApi';
import url from '../../../../services/urls';

// regras  e errors para validação dos inputs
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muito curto!')
    .max(35, 'Muito longo!')
    .matches(/^[A-Za-zÀ-ÿ\- &]*$/, 'Caractere não valido!')
    .required('Obrigatório'),
  surname: Yup.string()
    .min(2, 'Muito curto!')
    .max(40, 'Muito longo!')
    .matches(/^[A-Za-zÀ-ÿ\- &]*$/, 'Caractere não valido!')
    .required('Obrigatório'),
  email: Yup.string().email('Email invalido!').required('Obrigatório'),
  password: Yup.string()
    .min(6, 'Use no mínimo 6 caracteres')
    .required('Obrigatório'),
  passwordVerf: Yup.string()
    .required('Confirmação obrigatória')
    .oneOf([Yup.ref('password')], 'Use a mesma senha!'),
});

function RegisterForm({ openDrawer }) {
  // breakpoint de 606px. Possibilidade de alteração
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  // variável que armazena os dados da confirmação do cadastro
  const toast = useToast();

  return (
    <Box p="1rem">
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          name: '',
          surname: '',
          email: '',
          passwordVerf: '',
          password: '',
        }}
        // função para capturar os valores dos inputs
        onSubmit={values => {
          const data = {
            name: values.name,
            surname: values.surname,
            username: values.email,
            password: values.password,
          };
          setTimeout(() => {
            alert(data);
            toast({
              title: 'Conta criada.',
              description: 'Entre com seu login.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          });
          try {
            baseApi
              .post(url.POST_NEW_USER, data);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        {props => (
          <Container maxW="md" bgColor="">
            <Box display="flex" flexWrap="wrap" flexDirection="column">
              <Form onSubmit={props.handleSubmit}>
                <FormControl>
                  <Box display="flex" flexDirection="row" gap={4}>
                    <InputRegister
                      fieldDescription="Nome"
                      props={props}
                      fieldname="name"
                      errors={props.errors.name}
                      touched={props.touched.name}
                      type="text"
                      errorColor="var(--red)"
                    />
                    <InputRegister
                      fieldDescription="Sobrenome"
                      props={props}
                      fieldname="surname"
                      errors={props.errors.surname}
                      touched={props.touched.surname}
                      type="text"
                      errorColor="var(--red)"
                    />
                  </Box>
                  <InputRegister
                    fieldDescription="Email"
                    props={props}
                    fieldname="email"
                    errors={props.errors.email}
                    touched={props.touched.email}
                    type="text"
                    errorColor="var(--red)"
                  />
                  <InputPassword
                    fieldDescription="Senha"
                    props={props}
                    fieldname="password"
                    errors={props.errors.password}
                    touched={props.touched.password}
                    errorColor="var(--red)"
                  />
                  <InputRegister
                    fieldDescription="Confirme sua Senha"
                    props={props}
                    fieldname="passwordVerf"
                    errors={props.errors.passwordVerf}
                    touched={props.touched.passwordVerf}
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
                  />
                </Box>
              </Form>
              <Box display="flex" justifyContent="center" m={2}>
                <Text fontSize="sm">
                  Já tem uma conta?
                  <Text
                    cursor="pointer"
                    onClick={openDrawer}
                    as="span"
                    color="var(--blue)"
                    fontSize="sm"
                  >
                    {' '}
                    Login
                  </Text>
                </Text>
              </Box>
            </Box>
          </Container>
        )}
      </Formik>
    </Box>
  );
}
export default RegisterForm;
