import { GridItem } from '@chakra-ui/react';

function GridProductItem({ bgImage, gridArea }, props) {
  return (
    <GridItem
      {...props}
      rounded="lg"
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      cursor="pointer"
      bgSize="cover"
      gridArea={gridArea || '1 / 2 / 2 / 3'}
      transition="transform 0.5s ease-in-out"
    />
  );
}

export default GridProductItem;
