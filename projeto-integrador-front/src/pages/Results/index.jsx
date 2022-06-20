import { Box, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';
import { RouteContext } from '../../contexts/RoutesContext';
import baseApi from '../../services/service.baseApi';
import PlaceCard from '../Home/components/PlaceCard';
import PlaceList from '../Home/components/PlacesList';

function Results() {
  const { place, setCardsRender } = useContext(InfoContext);
  const { categoryID } = useContext(RouteContext);
  const [categoryInfo, setCategoryInfo] = useState({});

  async function getCategories(id, categoryStateFn) {
    const { data } = await baseApi.get(`categories/${id}`);
    console.log(data);
    await categoryStateFn(data);
    console.log(categoryInfo);
    return data;
  }

  useEffect(() => {
    try {
      getCategories(categoryID, setCategoryInfo);
      console.log(categoryInfo);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Box>
    <Text as="h2">Resultados da pesquisa: {place.city || place.category}</Text>
    <Box>
     {/*  {categoryInfo && categoryInfo.accommodationSet.map(acc => (
        <PlaceCard place={acc} />
      ))} */}
    </Box>
    </Box>

  );
}

export default Results;
