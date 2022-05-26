import { FormLabel, Input, Text } from '@chakra-ui/react';

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
    <>
      <FormLabel mt={6} mb={0} htmlFor={fieldname}>{fieldDescription}</FormLabel>
      <Input
        {...props.getFieldProps(fieldname)}
        id={fieldname}
        placeholder={placeholderDescription}
        type={type}
        name={fieldname}
      />
      {errors && touched ? (
        <Text as="span" color={errorColor} size="xs">
          {errors}
        </Text>
      ) : null}
    </>
  );
}

export default InputRegister;
