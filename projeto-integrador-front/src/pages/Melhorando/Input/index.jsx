import { Box, FormLabel, Tooltip } from '@chakra-ui/react';
import { Field } from 'formik';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const {
    tooltipLabel,
    placeholder,
    inputlabel,
    onChange,
    children,
    padding,
    htmlFor,
    border,
    value,
    name,
    id,
    as,
  } = props;

  const fieldStyle = {
    padding: padding || '1rem',
    borderRadius: '0.5rem',
    width: '100%',
    height: '100%',
    border
  };

  return (
    <Box>
      <Tooltip label={tooltipLabel}>
        <FormLabel htmlFor={htmlFor}>
          {inputlabel}
        </FormLabel>
      </Tooltip>
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
  );
});

export default Input;
