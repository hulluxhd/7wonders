import { Box, FormLabel } from '@chakra-ui/react';
import { Field } from 'formik';

const fieldStyle = {
  padding: '5px 0 5px 15px',
  borderRadius: '0.25rem',
  width: '100%',
};

function Input({
  htmlFor,
  id,
  name,
  placeholder,
  inputLabel,
  value,
  children,
  as,
}, props) {
  return (
    <Box bgColor="gray.300" padding="1rem" borderRadius="0.5rem" w="100%">
      <FormLabel w="100%" htmlFor={htmlFor}>
        {inputLabel}
      </FormLabel>
      <Field
        placeholder={placeholder}
        style={fieldStyle}
        value={value}
        name={name}
        id={id}
        as={as}
        {...props}
      >
        {children}
      </Field>
    </Box>
  );
}

export default Input;
