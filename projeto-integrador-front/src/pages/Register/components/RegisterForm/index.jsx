import {
  InputRightElement,
  useMediaQuery,
  FormControl,
  InputGroup,
  Container,
  useToast,
  Button,
  Text,
  Icon,
  Box,
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
          passwordVerf: '',
          password: '',
          surname: '',
          email: '',
          name: '',
        }}
        // função para capturar os valores dos inputs
        onSubmit={values => {
          const data = {
            password: values.password,
            surname: values.surname,
            username: values.email,
            name: values.name,
          };
          try {
            baseApi.post(url.POST_NEW_USER, data);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        {props => (
          <Container background="rgba(99,58,57,0.5)" maxW="md" borderRadius="0.5rem">
            <Box display="flex" flexWrap="wrap" flexDirection="column">
              <Form onSubmit={props.handleSubmit}>
                <FormControl>
                  <Box display="flex" flexDirection="row" gap={4}>
                    <InputRegister
                      touched={props.touched.name}
                      errors={props.errors.name}
                      fieldDescription="Nome"
                      errorColor="var(--red)"
                      fieldname="name"
                      props={props}
                      type="text"
                    />
                    <InputRegister
                      touched={props.touched.surname}
                      errors={props.errors.surname}
                      fieldDescription="Sobrenome"
                      errorColor="var(--red)"
                      fieldname="surname"
                      props={props}
                      type="text"
                    />
                  </Box>
                  <InputRegister
                    touched={props.touched.email}
                    errors={props.errors.email}
                    fieldDescription="Email"
                    errorColor="var(--red)"
                    fieldname="email"
                    props={props}
                    type="text"
                  />
                  <InputPassword
                    touched={props.touched.password}
                    errors={props.errors.password}
                    fieldDescription="Senha"
                    errorColor="var(--red)"
                    fieldname="password"
                    props={props}
                  />
                  <InputRegister
                    touched={props.touched.passwordVerf}
                    errors={props.errors.passwordVerf}
                    fieldDescription="Confirme sua Senha"
                    fieldname="passwordVerf"
                    errorColor="var(--red)"
                    type="password"
                    props={props}
                  />
                </FormControl>

                <Box
                  flexDir={isSmallerThan606 ? 'column' : 'row'}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  m={4}
                >
                  <BasicButton
                    ml={isSmallerThan606 ? null : '1rem'}
                    w={isSmallerThan606 ? '80%' : '40%'}
                    transition="all 0.2s ease-in-out"
                    description="Registrar"
                    type="submit"
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
                    onClick={openDrawer}
                    color="var(--blue)"
                    cursor="pointer"
                    fontSize="sm"
                    as="span"
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
