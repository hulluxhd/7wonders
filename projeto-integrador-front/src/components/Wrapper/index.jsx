import { Box, useMediaQuery } from '@chakra-ui/react';

function Wrapper(props) {
  const { children, px, paddingX } = props;
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan851] = useMediaQuery('(max-width: 851px)');

  return (
    <Box {...props} px={px || (isSmallerThan606 ? '1rem' : (isSmallerThan851 ? '2rem' : (paddingX || '3rem')))}>
      {children}
    </Box>
  );
}

export default Wrapper;
