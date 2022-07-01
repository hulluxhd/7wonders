import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../contexts/InfoContext';
import baseApi from '../../services/service.baseApi';
import Wrapper from '../../components/Wrapper';
import HorizontalCard from '../../components/HorizontalCard';

async function getData(_id, _search, _cb) {
  const { data } = await baseApi.get(`${_search}/${_id}`);
  return data;
}

function Results({ informations }) {
  const [accommodations, setAccommodations] = useState([]);

  const {
    place: { city, category },
  } = useContext(InfoContext);

  if (informations) {
    const {
      params: { id, endpoint },
    } = informations;

    useEffect(() => {
      try {
        getData(id, endpoint).then(resp => {
          if (!resp.accommodations) {
            const { accommodationSet } = resp;

            setAccommodations(accommodationSet);
          } else {
            const { accommodations: accommodation } = resp;

            setAccommodations(accommodation);
          }
        });
      } catch (e) {
        console.error(e);
      }
    }, [city]);
  } else {
    useEffect(() => {
      try {
        baseApi.get('accommodations').then(({ data }) => {
          setAccommodations(data);
        });
      } catch (e) {
        console.error(e);
      }
    }, []);
  }

  return (
    <Wrapper>
      <Text as="h2">
        {`Resultados da pesquisa${
          (city || category) && `: ${city || category}`
        }`}
      </Text>
      <Box>
        {accommodations?.map(acc => (
          <HorizontalCard cardInfo={acc} key={acc.id} />
        ))}
      </Box>
    </Wrapper>
  );
}

export default Results;
