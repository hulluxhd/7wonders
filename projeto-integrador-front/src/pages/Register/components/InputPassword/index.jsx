import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
} from '@chakra-ui/react';
import React, { useState } from 'react';

function InputPassword({
  fieldname,
  placeholderDescription,
  fieldDescription,
  type,
  errorColor,
  props,
  errors,
  touched,
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
          bgColor="#FFF"
          {...props.getFieldProps(fieldname)}
          id={fieldname}
          placeholder={placeholderDescription}
          type={show ? 'text' : 'password'}
          name={fieldname}
          color="var(--light-blue)"
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
