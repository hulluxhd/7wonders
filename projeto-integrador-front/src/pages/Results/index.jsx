import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { InfoContext } from '../../contexts/InfoContext';

function Results() {
  const { place } = useContext(InfoContext);

  // ! ESSA FUNÇÃO VAI PARA A PÁGINA DE LISTAGEM

  return <Box as="h2">Resultados da pesquisa: {place.city}</Box>;
}

export default Results;
