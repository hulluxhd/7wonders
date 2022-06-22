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
      background={(background || bgColor || backgroundColor) || 'var(--blue)'}
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

/* BasicButton.propTypes = {
  w: PropTypes.string.isRequired,
  ml: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
}; */
