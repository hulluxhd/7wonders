import { Box } from '@chakra-ui/react';
import RegisterForm from './components/RegisterForm';

function Register({ openDrawer }) {
  return (
    <Box
      h="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      backgroundPosition="center"
      bgImage="url(https://cdn.discordapp.com/attachments/998213274048933888/998213854158934076/02.jpg)"
    >
      <RegisterForm openDrawer={openDrawer} />
    </Box>
  );
}

export default Register;
