import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';
import BasicButton from '../BasicButton';

function DrawerLogin({ isOpen, onClose }) {
  const [nickname, setNickname] = useState('');
  const { setUsername } = useContext(InfoContext);

  const inputNick = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(nickname);
    console.log('submitted');
    onClose()
  }

  return (
    <Drawer initialFocusRef={inputNick} isOpen={isOpen} onClose={onClose}>
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
              style={{display: "flex", flexDirection: "column", gap: "1.5rem"}}
            >
              <Box>
                <label style={{fontFamily: "Poppins, sans-serif"}}>
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
                <label style={{fontFamily: "Poppins, sans-serif"}}>
                  Senha
                <Input color="var(--hard-blue)" id="password" type="password" />
                </label>
              </Box>
            </form>
        
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Stack direction="row" spacing="10px">
            <BasicButton description="Cancelar" type='submit' form="login-form"/>
            <BasicButton description="Entrar"  border="2px solid #FFF" p="0.5rem"/>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerLogin;
