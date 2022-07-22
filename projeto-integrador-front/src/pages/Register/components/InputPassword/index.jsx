import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  InputRightElement,
  InputGroup,
  FormLabel,
  Button,
  Input,
  Text,
  Icon,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';

function InputPassword({
  placeholderDescription,
  fieldDescription,
  errorColor,
  fieldname,
  touched,
  props,
  errors,
  type,
}) {
  // função para exibir/ocultar password
  const [show, setShow] = useState(false);
  const handleClick = () => setShow((prevState) => !prevState);

  return (
    <Box display="flex" flexDirection="column">
      <FormLabel color="var(--hard-blue)" mt={6} mb={0} htmlFor={fieldname}>
        {fieldDescription}
      </FormLabel>
      <InputGroup>
        <Input
          placeholder={placeholderDescription}
          {...props.getFieldProps(fieldname)}
          type={show ? 'text' : 'password'}
          color="var(--light-blue)"
          name={fieldname}
          id={fieldname}
          bgColor="#FFF"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.5rem" size="sm" onClick={handleClick}>
            {show ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
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

export default InputPassword;
