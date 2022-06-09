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
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { InfoContext } from '../../../../contexts/InfoContext';
import BasicButton from '../../../BasicButton';

function DrawerLogin({ isOpen, onClose, breakpoint }) {
  const mockupInfo = {
    name: 'Denny Ribeiro',
    email: 'denny.ribeiro@outlook.com',
    password: '123456',
  };

  const inputNick = useRef();

  const [errors, setErrors] = useState('');

  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const { setUsername } = useContext(InfoContext);

  const validateEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChangeLogin = useCallback(
    ({ target }) => {
      setLoginData(prev => ({
        ...prev,
        [target.name]: target.value, // entre [] pois é um atributo do input
      }));
    },
    [setLoginData]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .matches(validateEmailRegex)
        .matches(mockupInfo.email)
        .required(),
      password: yup.string().min(6).matches(mockupInfo.password).required(),
    });

    try {
      await schema.validate(loginData);
      setUsername(mockupInfo.name);
      onClose();
      setErrors('');
    } catch (err) {
      setErrors(err.errors[0]);
    }
  }

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

        <DrawerBody display="flex" flexDir="column" justifyContent="center" color="var(--hard-blue)">
          <Text as="h2" mb="2rem">Entre com a sua conta</Text>
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
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--hard-blue)' }}
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
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--hard-blue)' }}
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
                {errors.password &&
                  (
                    <Text as="span" fontSize="xs" color="gray.600">
                      {errors.password}
                    </Text>
                  )}
              </Box>
            </form>
          </Box>
          {
            errors &&
            (
              <Text
                textAlign="left"
                fontFamily="'Poppins', sans-serif"
                fontSize="sm"
                as="span"
                color="red.500"
              >
                Credenciais inválidas, por favor tente novamente.
              </Text>
            )
          }

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
                _hover={{ border: '1px solid var(--blue)', color: 'var(--blue)', bgColor: '#FFF' }}
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
