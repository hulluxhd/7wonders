import { Box, FormLabel } from '@chakra-ui/react';
import { Field } from 'formik';

const fieldStyle = {
    padding: '5px',

};

function Input({
 htmlFor, id, name, placeholder, inputLabel
}) {
  return (
    <Box>
      <FormLabel htmlFor={htmlFor}>{inputLabel}</FormLabel>
      <Field style={fieldStyle} id={id} name={name} placeholder={placeholder} />
    </Box>
  );
}

export default Input;
