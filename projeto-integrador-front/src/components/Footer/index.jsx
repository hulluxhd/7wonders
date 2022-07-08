import {
  Box,
  Icon,
  Text,
  useMediaQuery,
 } from '@chakra-ui/react';
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  return (
    <Box
      position="relative"
      width="100%"
      bottom="0"
      left="0"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDir={isSmallerThan606 ? 'column' : 'row'}
      as="footer"
      bgColor="#d8d0c5"
      p="1rem 3rem"
    >
      <Text
        color="var(--hard-blue)"
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
        fontSize="1rem"
      >
        ©2022 Digital Booking
      </Text>
      <Box
        display="flex"
        justifyContent="space-evenly"
        gap="1.25rem"
        mt={isSmallerThan606 ? '0.8rem' : null}
      >
        <Icon color="var(--hard-blue)" fontSize="1.75rem" as={FaFacebook} />
        <Icon color="var(--hard-blue)" fontSize="1.75rem" as={FaLinkedinIn} />
        <Icon color="var(--hard-blue)" fontSize="1.75rem" as={FaTwitter} />
        <Icon color="var(--hard-blue)" fontSize="1.75rem" as={FaInstagram} />
      </Box>
    </Box>
  );
}

export default Footer;
