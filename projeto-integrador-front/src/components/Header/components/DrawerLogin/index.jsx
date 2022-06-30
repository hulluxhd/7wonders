import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  StackItem,
  Text,
} from '@chakra-ui/react';
import {
 useCallback, useContext, useEffect, useRef, useState
} from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { InfoContext } from '../../../../contexts/InfoContext';
import BasicButton from '../../../BasicButton';
import baseApi from '../../../../services/service.baseApi';

function DrawerLogin({ isOpen, onClose, breakpoint }) {
  const inputNick = useRef();

  const [errors, setErrors] = useState('');

  const [usersInfo, setUsersInfo] = useState([]);

  const [userInfoForm, setUserInfoForm] = useState({ email: '', password: '' });

  const { user, setUser } = useContext(InfoContext);

  function verifyLogin(array, email, password) {
    const findEmail = array.find(_user => _user.userEmail === email);
    if (!findEmail) return setErrors('Usuário não encontrado');
    if (findEmail.userPassword !== password) return setErrors('Senha inválida');

    return {
      ...findEmail,
      token: 'authorized',
    };
  }

  const validateEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChangeLogin = useCallback(
    ({ target }) => {
      setUserInfoForm(prev => ({
        ...prev,
        [target.name]: target.value, // entre [] pois é um atributo do input
      }));
    },
    [setUserInfoForm]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const schema = yup.object().shape({
      email: yup.string().email().matches(validateEmailRegex).required(),
      password: yup.string().min(6).required(),
    });

    try {
      const { email, password } = userInfoForm;
      await schema.validate(userInfoForm);
      const loggedUser = verifyLogin(usersInfo, email, password);
      if (!loggedUser) throw new Error();
      setUser(loggedUser);
      onClose();
      setErrors('');
    } catch (err) {
      setErrors(err.errors[0]);
      setUser({});
      console.error(errors);
    }
  }

  useEffect(() => {
    try {
      baseApi.get('/users').then(({ data, status }) => {
        if (status === 200) {
          setUsersInfo(data);
        }
        if (status === 201) {
          // ! implementar toastify ou modal
          /* Se o endpoint não retornar o status 201, o bloco de login deverá exibir
          uma mensagem de erro no formulário informando ao usuário:
          "Infelizmente, você não pôde efetuar login. Por favor, tente novamente mais tarde." */
        }
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Drawer
      size={breakpoint ? 'full' : 'xs'}
      initialFocusRef={inputNick}
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bg="#FFF">
        <DrawerCloseButton />

        <DrawerBody
          display="flex"
          flexDir="column"
          justifyContent="center"
          color="var(--hard-blue)"
        >
          <Text as="h2" mb="2rem">
            Entre com a sua conta
          </Text>
          <Box>
            <form
              onSubmit={handleSubmit}
              id="login-form"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <Box>
                <label
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'var(--hard-blue)',
                  }}
                >
                  E-mail
                  <Input
                    onChange={e => handleChangeLogin(e)}
                    name="email"
                    type="text"
                    color="var(--hard-blue)"
                    fontSize="sm"
                  />
                </label>
              </Box>
              <Box>
                <label
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'var(--hard-blue)',
                  }}
                >
                  Senha
                  <Input
                    onChange={e => handleChangeLogin(e)}
                    color="var(--hard-blue)"
                    fontSize="sm"
                    id="password"
                    type="password"
                    name="password"
                  />
                </label>
                {errors.password && (
                  <Text as="span" fontSize="xs" color="gray.600">
                    {errors.password}
                  </Text>
                )}
              </Box>
            </form>
          </Box>
          {errors && (
            <Text
              textAlign="left"
              fontFamily="'Poppins', sans-serif"
              fontSize="sm"
              as="span"
              color="red.500"
            >
              {errors}
            </Text>
          )}

          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            m="2rem auto"
          >
            <Stack top="-10%" direction="row" spacing="20px">
              <BasicButton
                description="Voltar"
                onClick={() => {
                  onClose();
                  setErrors('');
                }}
                border="1px solid transparent"
                borderRadius="0"
                background="transparent"
                transition="all 0.2s ease-in-out"
                color="var(--blue)"
                _hover={{ borderBottom: '1px solid var(--blue)' }}
              />
              <BasicButton
                description="Entrar"
                p="0.5rem 1rem"
                type="submit"
                border="1px solid var(--blue)"
                borderRadius="0.25rem"
                form="login-form"
                transition="all 0.2s ease-in-out"
                _hover={{
                  border: '1px solid var(--blue)',
                  color: 'var(--blue)',
                  bgColor: '#FFF',
                }}
              />
            </Stack>
            <Stack pt="10px" alignItems="center">
              <StackItem as="span" fontSize="xs" color="var(--hard-blue)">
                Não tem conta?
              </StackItem>
              <Link to="/register">
                <StackItem
                  as="span"
                  onClick={onClose}
                  fontSize="xs"
                  color="var(--blue)"
                  _hover={{ borderBottom: '1px solid var(--blue)' }}
                >
                  Cadastrar
                </StackItem>
              </Link>
            </Stack>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerLogin;
