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
      flexDir={isSmallerThan606 ? 'column' : 'row'}
      justifyContent="space-between"
      position="relative"
      alignItems="center"
      bgColor="#d8d0c5"
      display="flex"
      p="1rem 3rem"
      width="100%"
      as="footer"
      bottom="0"
      left="0"
    >
      <Text
        fontFamily="'Poppins', sans-serif"
        color="var(--hard-blue)"
        fontWeight="bold"
        fontSize="1rem"
      >
        ©2022 7 Wonders
      </Text>
      <Box
        mt={isSmallerThan606 ? '0.8rem' : null}
        justifyContent="space-evenly"
        display="flex"
        gap="1.25rem"
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
