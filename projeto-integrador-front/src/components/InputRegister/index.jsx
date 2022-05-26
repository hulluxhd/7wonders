import {
  Box, FormLabel, Input, Text
} from '@chakra-ui/react';

function InputRegister({
  fieldname,
  placeholderDescription,
  fieldDescription,
  type,
  errorColor,
  props,
  errors,
  touched,
}) {
  return (
    <Box display="flex" flexDirection="column">
      <FormLabel mt={6} mb={0} htmlFor={fieldname}>{fieldDescription}</FormLabel>
      <Input
        {...props.getFieldProps(fieldname)}
        id={fieldname}
        placeholder={placeholderDescription}
        type={type}
        name={fieldname}
      />
      <Box>
        {errors && touched ? (
          <Text as="span" color={errorColor} size="xs" position="absolute">
            {errors}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}

export default InputRegister;
