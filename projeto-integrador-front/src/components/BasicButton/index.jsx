import { Box } from '@chakra-ui/react';

function BasicButton(props) {
  return (
    <Box
      {...props}
      display="flex"
      justifyContent="center"
      alignItems="center"
      as="button"
      w={props.w}
      ml={props.ml}
      h={props.h || props.height || '2.5rem'}
      background={(props.background || props.bgColor || props.backgroundColor) || "var(--blue)"}
      border={props.border || "2px solid var(--blue)"}
      borderRadius="0.25rem"
      color="#FFF"
      fontWeight="bold"
    >
      {props.description}
    </Box>
  );
}

export default BasicButton;
