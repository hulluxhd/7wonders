import {
  Box, Icon, IconButton, Text
} from '@chakra-ui/react';
import { IoMdCloseCircle } from 'react-icons/io';

function AtributeIcon({
  name, index, icon, onClick
}) {
  return (
    <Box
      key={`${name}${index.toString()}`}
      justifyContent="center"
      position="relative"
      alignItems="center"
      flexDir="column"
      display="flex"
    >
      <Icon boxSize="2rem" as={icon} display="block" />
      <IconButton
        _hover={{ background: 'transparent' }}
        background="transparent"
        as={IoMdCloseCircle}
        position="absolute"
        onClick={onClick}
        cursor="pointer"
        color="red.400"
        boxSize="1rem"
        right={-6}
        top={-1}
      />
    </Box>
  );
}

export default AtributeIcon;
