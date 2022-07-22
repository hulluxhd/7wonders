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
    <Box
      textAlign="center"
      cursor="pointer"
      margin="1rem 0"
      h="4rem"
      as="label"
    >
      <input {...getInputProps()} hidden />
      <Box
        bg={state.isChecked ? 'var(--hard-blue)' : 'transparent'}
        {...getCheckboxProps()}
        rounded="full"
        w="4.2rem"
        h="100%"
        p={1}
      >
        <Image src={image} h="100%" rounded="full" {...getLabelProps()} />
        <Text as="span" fontSize="small">
          {category}
        </Text>
      </Box>
    </Box>
  );
}

export default CustomRadio;
