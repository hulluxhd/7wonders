import { Box, Text, Image } from '@chakra-ui/react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { InfoContext } from '../../../../contexts/InfoContext';

function CategoryCard({ categoryToRender }) {
  const {
    description, image, name, id, accommodations
  } = categoryToRender;

  const {
    setPlace,
  } =
    useContext(InfoContext);

  const navigate = useNavigate();

  // const [searchParams, setSearchParams] = useSearchParams();

  function categoryEngine(category, categoryId) {
    setPlace({
      city: '',
      country: '',
      category: category,
    });
    navigate(`/results/categories/${categoryId}`);
  }

  return (
    <Box
      onClick={() => categoryEngine(name, id)}
      transition="transform 0.2s ease-in-out"
      border="1px solid var(--light-bege)"
      boxShadow="1px 2px 1px var(--blue)"
      borderRadius="10px"
      background="#FFF"
      flexDir="column"
      cursor="pointer"
      display="flex"
      w="100%"
      _hover={{ transform: 'scale(1.08)' }}
    >
      <Image
        borderRadius="10px 10px 0 0"
        src={categoryToRender.image}
        alt="alt-image"
        fit="cover"
        w="100%"
        h="100%"
      />
      <Box display="flex" flexDirection="column" m="0.5rem">
        <Text color="var(--hard-blue)" as="h3" fontWeight="800">
          {name}
        </Text>
        <Text
          color="var(--light-blue)"
          fontWeight="bold"
          fontSize="sm"
          as="span"
        >
          {accommodations.length} {name}
        </Text>
      </Box>
    </Box>
  );
}

export default CategoryCard;
