import {
 Box, Image, Text, useRadio
} from '@chakra-ui/react';

function CustomRadio(props) {
  const { image } = props;
  const {
 state, getInputProps, getCheckboxProps, htmlProps, getLabelProps
} =
    useRadio(props);
console.log(getInputProps());
  return (
    <Box cursor="pointer">
      <input {...getInputProps()} hidden />
      <Box
        {...getCheckboxProps()}
        bg={state.isChecked ? 'green.200' : 'transparent'}
        w={12}
        p={1}
        rounded="full"
      >
        <Image src={image} rounded="full" {...getLabelProps()} />
      </Box>
    </Box>
  );
}

export default CustomRadio;
