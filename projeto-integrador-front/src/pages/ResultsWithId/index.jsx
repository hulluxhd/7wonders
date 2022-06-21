import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';
import baseApi from '../../services/service.baseApi';
import Wrapper from '../../components/Wrapper';

function ResultsWithId() {
  const { place } = useContext(InfoContext);
  const [info, setInfo] = useState({});
  const { searchId, search } = useParams();

  async function getData(_id, _search, _cb) {
    const { data } = await baseApi.get(`${_search}/${_id}`);
    await _cb(data);
  }

  function renderInfo() {
    if (info.accommodations) {
      return info.accommodations.map(acc => <Box as="li">{acc.accoName}</Box>);
    }
    return info.accommodationSet?.map(acc => <Box as="li">{acc.accoName}</Box>);
  }

  console.log(info);

  useEffect(() => {
    try {
      getData(searchId, search, setInfo);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Wrapper>
      <Text as="h2">
        Resultados da pesquisa: {place.city || place.category}
      </Text>
      <Box as="ul">
        {renderInfo()}
      </Box>
    </Wrapper>
  );
}

export default ResultsWithId;
