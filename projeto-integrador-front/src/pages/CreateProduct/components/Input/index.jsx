import { Box, FormLabel } from '@chakra-ui/react';
import { Field } from 'formik';
import { forwardRef } from 'react';

const fieldStyle = {
  padding: '5px 0 5px 15px',
  borderRadius: '0.25rem',
  width: '100%',
};

const Input = forwardRef((props, ref) => {
  const {
    placeholder,
    inputlabel,
    children,
    htmlFor,
    value,
    name,
    id,
    as,
  } = props;

  return (
    <Box padding="1rem" borderRadius="0.5rem" w="100%">
      <FormLabel w="100%" htmlFor={htmlFor}>
        {inputlabel}
      </FormLabel>
      <Field
        placeholder={placeholder}
        style={fieldStyle}
        value={value}
        name={name}
        id={id}
        as={as}
        ref={ref}
        {...props}
      >
        {children}
      </Field>
    </Box>
  );
});

export default Input;
