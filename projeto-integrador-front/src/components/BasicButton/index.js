import { Box } from '@chakra-ui/react';

function BasicButton(props) {
  return (
    <Box
      {...props}
      as="button"

      h={props.h || props.height || '2.5rem'}
      background={(props.background || props.bgColor || props.backgroundColor) || "var(--blue)"}
      border={props.border || "2px solid var(--blue)"}
      borderRadius="0.25rem"
      color="#FFF"
      fontWeight="bold"
      transition="all 0.2s ease-in-out"
      _hover={props._hover || {
        background: 'transparent',
        border: '2px solid var(--blue)',
      }}
    >
      {props.description}
    </Box>
  );
}

export default BasicButton;
