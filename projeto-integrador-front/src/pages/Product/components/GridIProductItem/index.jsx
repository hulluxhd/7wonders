import { GridItem } from '@chakra-ui/react';

function GridProductItem({ bgImage, lg }, props) {
  return (
    <GridItem
      {...props}
      rounded={ lg || 'lg'}
      colSpan={4}
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      cursor="pointer"
      bgSize="cover"
      _hover={{
        transform: 'scale(1.01)',
        border: '1px solid var(--hard-blue)',
      }}
      transition="transform 0.5s ease-in-out"
    />
  );
}

export default GridProductItem;
