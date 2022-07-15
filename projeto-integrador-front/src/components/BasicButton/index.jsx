import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

function BasicButton(props) {
  const {
    w, ml, h, height, background, bgColor, backgroundColor, description, border, borderRadius, color
  } = props;
  return (
    <Box
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      as="button"
      w={w || '100%'}
      ml={ml}
      h={h || height || '2.5rem'}
      background="var(--blue)"
      _hover={{
        background: '#3F0D0C',
        color: '#D9B061',
        border: '#8D6F57',
      }}
      border={border || '2px solid var(--blue)'}
      borderRadius={borderRadius || '0.25rem'}
      color={color || '#FFF'}
      fontWeight="bold"
    >
      {description}
    </Box>
  );
}

export default BasicButton;
