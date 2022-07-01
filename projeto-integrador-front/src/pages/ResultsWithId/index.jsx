import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import InfoProvider, { InfoContext } from '../../contexts/InfoContext';
import baseApi from '../../services/service.baseApi';
import Wrapper from '../../components/Wrapper';
import HorizontalCard from '../../components/HorizontalCard';
import Results from '../Results';

function ResultsWithId() {
  const { searchId, search } = useParams();

  const informations = {
    params: {
      id: searchId,
      endpoint: search,
    },
  };

  return (
      <Box>
        <Results informations={informations} />
      </Box>
  );
}

export default ResultsWithId;
