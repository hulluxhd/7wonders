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
  colSpan,
}) {
  return (
    <Box display="flex" flexDirection="column" colSpan={colSpan}>
      <FormLabel color="var(--hard-blue)" mt={6} mb={0} htmlFor={fieldname}>{fieldDescription}</FormLabel>
      <Input
        bgColor="#FFF"
        {...props.getFieldProps(fieldname)}
        id={fieldname}
        placeholder={placeholderDescription}
        type={type}
        name={fieldname}
        color="var(--light-blue)"
      />
      <Box>
        {errors && touched && (
          <Text as="span" color={errorColor} size="xs" position="absolute">
            {errors}
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default InputRegister;
