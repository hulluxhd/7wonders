import { Box, FormLabel, Tooltip } from '@chakra-ui/react';
import { Field } from 'formik';
import { forwardRef } from 'react';

const fieldStyle = {
  padding: '1rem',
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
    onChange,
    tooltipLabel,
    border,
  } = props;

  return (
    <>
    <Tooltip label={tooltipLabel} shouldWrapChildren>
        <FormLabel w="100%" htmlFor={htmlFor}>
          {inputlabel}
        </FormLabel>
    </Tooltip>
    <Box border={border} borderRadius="0.5rem" w="100%">
      <Field
        placeholder={placeholder}
        onChange={onChange}
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
    </>
  );
});

export default Input;
