import {
  Box, FormLabel, Input, Text
} from '@chakra-ui/react';

function InputRegister(teste) {
  const {
    placeholderDescription,
    fieldDescription,
    errorColor,
    fieldname,
    touched,
    colSpan,
    bgColor,
    errors,
    props,
    value,
    type,
  } = teste;
  return (
    <Box display="flex" flexDirection="column" colSpan={colSpan}>
      <FormLabel color="var(--hard-blue)" mt={6} mb={0} htmlFor={fieldname}>
        {fieldDescription}
      </FormLabel>
      <Input
        placeholder={placeholderDescription}
        {...props.getFieldProps(fieldname)}
        bgColor={bgColor || '#FFF'}
        color="var(--light-blue)"
        name={fieldname}
        id={fieldname}
        value={value}
        type={type}
        {...props}
      />
      <Box>
        {(errors && touched) && (
          <Text as="span" color={errorColor} size="xs" position="absolute">
            {errors}
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default InputRegister;
