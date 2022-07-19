import {
  Box, Image, Text, useRadio
} from '@chakra-ui/react';

function CustomRadio(props) {
  const { image, category } = props;
  const {
    state, getInputProps, getCheckboxProps, htmlProps, getLabelProps
  } =
    useRadio(props);
  return (
    <Box textAlign="center" h="4rem" as="label" cursor="pointer">
      <input {...getInputProps()} hidden />
      <Box
        {...getCheckboxProps()}
        bg={state.isChecked ? 'var(--hard-blue)' : 'transparent'}
        w="4rem"
        p={1}
        rounded="full"
        h="100%"
      >
        <Image src={image} h="100%" rounded="full" {...getLabelProps()} />
        <Text as="span" fontSize="small">{category}</Text>
      </Box>
    </Box>
  );
}

export default CustomRadio;
