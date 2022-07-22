import React from 'react';
import {
  Input,
  Image, Box,
} from '@chakra-ui/react';

function InputHeader(props) {
  const {
    placeholder, image, postop, value, onChange, readOnly, onClick
  } = props;

  return (

    <Box position="relative" onClick={onClick}>
      <Input
        placeholder={placeholder}
        borderRadius="0.25rem"
        paddingLeft="2.7rem"
        readOnly={readOnly}
        onChange={onChange}
        background="#FFF"
        fontSize="sm"
        value={value}
        _placeholder={{
          fontSize: '0.85rem',
        }}
        {...props}
      />
      <Image
        top={postop || '13px'}
        position="absolute"
        border-style="none"
        width="1rem"
        src={image}
        left="1rem"
        zIndex={1}
      />
    </Box>
  );
}

export default InputHeader;
