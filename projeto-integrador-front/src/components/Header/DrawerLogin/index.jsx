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
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../../contexts/InfoContext';
import BasicButton from '../../BasicButton';

function DrawerLogin({ isOpen, onClose, breakpoint }) {
  const mockupInfo = {
    name: 'Denny Ribeiro',
    email: 'denny.ribeiro@outlook.com',
    password: '123456',
  };

  const errors = {};

  const [password, setPassword] = useState('');

  const [email, setEmail] = useState('');

  const [isWrongCredencial, setIsWrongCredencial] = useState(false);

  const { setUsername } = useContext(InfoContext);

  const inputNick = useRef(null);

  // por algum motivo que não entendo, não consigo colocar essa condição
  // dentro de uma função
  if (password.length < 6) {
    errors.password = 'A senha deve ter pelo menos 6 caracteres';
  }

  if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    errors.email = 'Email inválido';
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password === mockupInfo.password && email === mockupInfo.email && !errors.email) {
      setUsername(mockupInfo.name);
      setIsWrongCredencial(false);
      onClose();
    } else {
      setIsWrongCredencial(true);
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
      <DrawerContent bg="var(--blue)">
        <DrawerCloseButton />
        <DrawerHeader as="h2" color="#FFF">
          Entre com a sua conta
        </DrawerHeader>
        <DrawerBody>
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
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#FFF' }}
                >
                  E-mail
                  <Input
                    onChange={e => handleChangeEmail(e)}
                    ref={inputNick}
                    name="nickname"
                    type="text"
                    color="var(--hard-blue)"
                    fontSize="sm"
                  />
                </label>
              </Box>
              <Box>
                <label
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#FFF' }}
                >
                  Senha
                  <Input
                    onChange={e => handleChangePassword(e)}
                    color="var(--hard-blue)"
                    fontSize="sm"
                    id="password"
                    type="password"
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
          {isWrongCredencial && (
            <Text
              textAlign="center"
              fontFamily="'Poppins', sans-serif"
              fontSize="sm"
              as="span"
              color="red.500"
            >
              Credenciais inválidas, por favor tente novamente.
            </Text>
          )}
        </DrawerBody>
        <DrawerFooter>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            m="0 auto"
          >
            <Stack top="-10%" direction="row" spacing="20px">
              <BasicButton
                description="Cancelar"
                onClick={() => {
                  onClose();
                  setIsWrongCredencial(false);
                }}
                border="1px solid transparent"
                p="0.2rem"
                _hover={{ borderBottom: '1px solid #FFF' }}
              />
              <BasicButton
                description="Entrar"
                p="0.2rem"
                type="submit"
                border="1px solid transparent"
                form="login-form"
                _hover={{ borderBottom: '1px solid #FFF' }}
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
                  color="var(--light-bege)"
                >
                  Cadastrar
                </StackItem>
              </Link>
            </Stack>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerLogin;
