import { Box, Text, Image } from '@chakra-ui/react';
import { useCallback, useContext, useEffect } from 'react';
import { InfoContext } from '../../../../contexts/InfoContext';

function CategoryCard({ categoryToRender }) {
  const {
    cardsRender,
    setCardsRender,
    place,
    setPlace,
    filterPlaces
  } = useContext(InfoContext);

  function categoryEngine(category) {
    setPlace(prev =>
    (
      {
        ...prev,
        category: category,
      }
    ))
  }

  useEffect(() => {
    console.log(place)
    setCardsRender(filterPlaces())
  }, [place.category]);

  return (
    <Box
      borderRadius="10px"
      background="#FFF"
      display="flex"
      flexDir="column"
      boxShadow="2px 6px 2px var(--light-bege)"
      w="100%"
      border="1px solid var(--light-bege)"
      cursor="pointer"
      onClick={() => categoryEngine(categoryToRender.category)}
    >
      <Image
        src={categoryToRender.imagePath}
        alt={categoryToRender.category}
        borderRadius="10px 10px 0 0"
        w="100%"
        h="100%"
        fit="cover"
      />
      <Box display="flex" flexDirection="column" m="0.5rem">
        <Text color="var(--hard-blue)" as="h3" fontWeight="800">
          {categoryToRender.category}
        </Text>
        <Text
          color="var(--light-blue)"
          fontSize="sm"
          as="span"
          fontWeight="bold"
        >
          {categoryToRender.quantity} {categoryToRender.category}s
        </Text>
      </Box>
    </Box>
  );
}

/* CategoryCard.propTypes = {
    categoryToRender: PropTypes.shape({
      category: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
      about: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  };

  CategoryCard.defaultProps = {
    categoryToRender: PropTypes.shape({
      category: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
      about: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  }; */

export default CategoryCard;
