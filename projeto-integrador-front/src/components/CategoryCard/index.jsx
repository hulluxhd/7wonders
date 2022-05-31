import {
    Box,
    Text,
    Image,
  } from '@chakra-ui/react';

  function CategoryCard({ categoryToRender }) {
    console.log(categoryToRender);
    return (
      <Box
        borderRadius="0.25rem"
        background="#FFF"
        display="flex"
        flexDir="column"
        boxShadow="base"
        alignItems="stretch"
        w="300px"
      >
        <Image
          src={categoryToRender.imagePath}
          alt={categoryToRender.category}
          w="100%"
          h="16rem"
          fit="cover"
        />
        <Box p="1rem 1rem">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                // alignItems="center"
              >
                <Text color="var(--light-blue)" fontSize="sm" as="span">
                  {categoryToRender.category}
                </Text>
                <Text color="var(--light-blue)" fontSize="sm" as="span">
                  {categoryToRender.quantity}
                </Text>
              </Box>
            </Box>
          </Box>
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
