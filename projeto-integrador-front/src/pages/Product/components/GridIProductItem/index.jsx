import { GridItem } from '@chakra-ui/react';

function GridProductItem({ bgImage, gridArea }, props) {
  return (
    <GridItem
      gridArea={gridArea || '1 / 2 / 2 / 3'}
      transition="transform 0.2s ease-in-out"
      bgImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      cursor="pointer"
      bgSize="cover"
      rounded="lg"
      {...props}
    />
  );
}

export default GridProductItem;
