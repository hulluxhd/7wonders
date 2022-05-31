import React from 'react';
import {
  Input,
  Image, Box,
} from '@chakra-ui/react';

function InputHeader(props) {
  const {
    placeholder, image, postop, value, onChange
  } = props;

  return (

    <Box position="relative">
      <Input
        background="#FFF"
        fontSize="sm"
        placeholder={placeholder}
        borderRadius="0.25rem"
        paddingLeft="2.7rem"
        _placeholder={{
          fontSize: '0.85rem',
        }}
        value={value}
        onChange={onChange}
      />
      <Image
        src={image}
        width="1rem"
        position="absolute"
        border-style="none"
        left="1rem"
        top={postop || '13px'}
        zIndex={1}
      />
    </Box>
  );
}

export default InputHeader;
