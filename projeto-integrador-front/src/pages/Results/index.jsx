import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';
import baseApi from '../../services/service.baseApi';
import Wrapper from '../../components/Wrapper';

function Results() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    try {
      baseApi.get('accommodations').then(({ data }) => {
        setAccommodations(data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Wrapper>
      <Text as="h2">Resultados da pesquisa </Text>
      <Box>
        {accommodations?.map(acc => (
          <Text key={acc.id}>{acc.accoName}</Text>
        ))}
      </Box>
    </Wrapper>
  );
}

export default Results;
