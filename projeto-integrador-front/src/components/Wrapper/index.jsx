import { Box, useMediaQuery } from '@chakra-ui/react';

function Wrapper(props) {
  const { children } = props;
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  return (
    <Box {...props} px={isSmallerThan606 ? '1rem' : '3rem'}>
      {children}
    </Box>
  );
}

export default Wrapper;
