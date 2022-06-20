import { Box, Text, Image } from '@chakra-ui/react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { InfoContext } from '../../../../contexts/InfoContext';
import { RouteContext } from '../../../../contexts/RoutesContext';

function CategoryCard({ categoryToRender }) {
  const {
    categoryName, categoryDescription, accommodationSet, id
  } =
    categoryToRender;

  const {
    setCardsRender, place, setPlace, localData
   } =
    useContext(InfoContext);

  const { setCategoryID } = useContext(RouteContext);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams);

  function categoryEngine(category, categoryId) {
    setPlace({
      city: '',
      country: '',
      category: category,
    });
    setCategoryID(categoryId);
    navigate(`/results/category/${categoryId}`);
  }

  // * Esse effect muda os cards que estão no slider. Não é isso que queremos.
  // * Queremos que quando um card de categoria for clicado, sejamos direcionados a uma
  // * página de resultado com aquela categoria
  /* useEffect(() => {
    if (place.category) {
      const filtered = localData.filter(
        category => category.categoryDescription === place.category
      );
      setCardsRender(filtered);
    }
  }, [place.category]); */

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
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.08)' }}
      onClick={() => categoryEngine(categoryName, id)}
    >
      <Image
        src={categoryToRender.imagePath}
        alt="alt-image"
        borderRadius="10px 10px 0 0"
        w="100%"
        h="100%"
        fit="cover"
      />
      <Box display="flex" flexDirection="column" m="0.5rem">
        <Text color="var(--hard-blue)" as="h3" fontWeight="800">
          {categoryName}
        </Text>
        <Text
          color="var(--light-blue)"
          fontSize="sm"
          as="span"
          fontWeight="bold"
        >
          {accommodationSet.length} {categoryName}
        </Text>
      </Box>
    </Box>
  );
}

export default CategoryCard;
