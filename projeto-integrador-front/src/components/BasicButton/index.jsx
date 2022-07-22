import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

function BasicButton(props) {
  const {
    w, ml, h, height, background, bgColor, description, borderRadius, color
  } = props;
  return (
    <Box
      bgColor={background || bgColor || '#D9B061'}
      borderRadius={borderRadius || '0.25rem'}
      transition="all 150ms ease-in-out"
      _hover={{
        filter: 'brightness(0.9)'
      }}
      h={h || height || '2.5rem'}
      color={color || '#FFF'}
      w={w || '100%'}
      fontWeight="bold"
      as="button"
      {...props}
      ml={ml}
    >
      {description}
    </Box>
  );
}

export default BasicButton;
