import {
  Box,
  Grid,
  GridItem,
  Icon
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import './calendar.css';
import {
  FaChevronRight,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaChevronLeft,
} from 'react-icons/fa';
import BasicButton from '../BasicButton';

function Calendly({ marginTop }) {
  const [value, setValue] = useState(null);

  function onChange(nextValue) {
    setValue(nextValue);
  }
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Box position="absolute" top={0} left={0} marginTop={marginTop} background="#FFF">
      <Calendar
        next2Label={<Icon as={FaChevronCircleRight} />}
        prev2Label={<Icon as={FaChevronCircleLeft} />}
        nextLabel={<Icon as={FaChevronRight} />}
        prevLabel={<Icon as={FaChevronLeft} />}
        minDate={new Date()}
        onChange={onChange}
        maxDetail="month"
        minDetail="year"
        locale="pt-BR"
        value={value}
        selectRange
      />
      <Grid gap="0.1rem" templateColumns="1fr 1fr">
        <GridItem w="100%">
          <BasicButton description="Limpar" />
        </GridItem>
        <GridItem w="100%">
          <BasicButton description="Continuar" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Calendly;
