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
import { InfoContext } from '../../contexts/InfoContext';
import BasicButton from '../BasicButton';

function DrawerLogin({ isOpen, onClose, breakpoint }) {
  const [nickname, setNickname] = useState('');
  const { setUsername } = useContext(InfoContext);

  const inputNick = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(nickname);
    onClose();
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
                  Nome
                  <Input
                    onChange={e => setNickname(e.target.value)}
                    ref={inputNick}
                    name="nickname"
                    type="text"
                    color="var(--hard-blue)"
                    autoComplete="off"
                  />
                </label>
              </Box>
              <Box>
                <label
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#FFF' }}
                >
                  Senha
                  <Input
                    color="var(--hard-blue)"
                    id="password"
                    type="password"
                  />
                </label>
              </Box>
            </form>
          </Box>
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
                onClick={onClose}
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
                <StackItem as="span" onClick={onClose} fontSize="xs" color="var(--light-bege)">
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
