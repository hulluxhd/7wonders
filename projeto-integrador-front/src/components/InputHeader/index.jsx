import React from 'react';
import {
  Input,
  Image, Box,
} from '@chakra-ui/react';

function InputHeader(props) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    placeholder, image, postop,
  } = props;
  return (

    // eslint-disable-next-line react/jsx-props-no-spreading
    <Box {...props} position="relative">
      <Input
        background="#FFF"
        placeholder={placeholder}
        borderRadius="0.25rem"
        paddingLeft="43px"
        _placeholder={{
          fontSize: '0.8rem',
        }}
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
