import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

function BasicButton(props) {
  const {
    w, ml, h, height, background, bgColor, backgroundColor, description, border, borderRadius, color
  } = props;
  return (
    <Box
      {...props}
      as="button"
      w={w || '100%'}
      ml={ml}
      h={h || height || '2.5rem'}
      bgColor={background || bgColor || '#D9B061'}
      _hover={{
        filter: 'brightness(0.9)'
      }}
      borderRadius={borderRadius || '0.25rem'}
      color={color || '#FFF'}
      fontWeight="bold"
      transition="all 150ms ease-in-out"
    >
      {description}
    </Box>
  );
}

export default BasicButton;
