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
import { Link, Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { InfoContext } from '../../../../contexts/InfoContext';
import BasicButton from '../../../BasicButton';
import baseApi from '../../../../services/service.baseApi';
import url from '../../../../services/urls';

function DrawerLogin({ isOpen, onClose, breakpoint }) {
  const inputNick = useRef();

  const navigate = useNavigate();

  const [errors, setErrors] = useState('');
  const [usersInfo, setUsersInfo] = useState({});
  const [userInfoForm, setUserInfoForm] = useState({ email: '', password: '' });

  const { user, setUser } = useContext(InfoContext);

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

  const handleSubmit = async e => {
    e.preventDefault();
    const schema = yup.object().shape({
      email: yup.string().email().matches(validateEmailRegex).required(),
      password: yup.string().min(6).required(),
    });
    try {
      await schema.validate(userInfoForm);
      const params = new URLSearchParams();
      params.append('username', userInfoForm.email);
      params.append('password', userInfoForm.password);

      baseApi
        .post(url.LOGIN, params)
        .then(({ data, status }, response) => {
          if (status === 200) {
            const token = data.access_token;
            localStorage.setItem('token', token);
            try {
              baseApi
                .get(url.USER_INFO, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(({ data: userData }) => {
                  setUser({
                    name: userData.name,
                    surname: userData.surname,
                    roles: userData.roles,
                    favorites: userData.favorites,
                    email: userData.username,
                  });
                });
            } catch (eol) {
              console.error(eol);
            }
            onClose();
          }
          if (status === 201) {
            // ! implementar toastify ou modal
            /* Se o endpoint não retornar o status 201, o bloco de login deverá exibir
          uma mensagem de erro no formulário informando ao usuário:
          "Infelizmente, você não pôde efetuar login. Por favor, tente novamente mais tarde." */
          }
        });
      setErrors('');
    } catch (err) {
      setErrors(err.errors[0]);
      setUser({});
      console.error(errors);
    }
  };
  return (
    <Drawer
      size={breakpoint ? 'full' : 'xs'}
      initialFocusRef={inputNick}
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bg="#FFF">
        <DrawerBody
          color="var(--hard-blue)"
          justifyContent="center"
          flexDir="column"
          display="flex"
        >
          <Text as="h2" mb="2rem">
            Entre com a sua conta
          </Text>
          <Box>
            <form
              onSubmit={handleSubmit}
              id="login-form"
              style={{
                flexDirection: 'column',
                display: 'flex',
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
                    color="var(--hard-blue)"
                    fontSize="sm"
                    name="email"
                    type="text"
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
                    type="password"
                    name="password"
                    id="password"
                    fontSize="sm"
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
              fontFamily="'Poppins', sans-serif"
              textAlign="left"
              color="red.500"
              fontSize="sm"
              as="span"
            >
              {errors}
            </Text>
          )}

          <Box
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            display="flex"
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
                background="transparent"
                color="var(--blue)"
                borderRadius="0"
              />
              <BasicButton
                transition="all 0.2s ease-in-out"
                border="1px solid var(--blue)"
                borderRadius="0.25rem"
                description="Entrar"
                form="login-form"
                p="0.5rem 1rem"
                type="submit"
              />
            </Stack>
            <Stack pt="10px" alignItems="center">
              <StackItem as="span" fontSize="xs" color="var(--hard-blue)">
                Não tem conta?
              </StackItem>
              <Link to="/register">
                <StackItem
                  _hover={{ borderBottom: '1px solid var(--blue)' }}
                  color="var(--blue)"
                  onClick={onClose}
                  fontSize="xs"
                  as="span"
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
