import {
 Box, Grid, GridItem, Icon
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import './calendar.css';
import {
  FaChevronRight,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaChevronLeft,
} from 'react-icons/fa';
import BasicButton from '../BasicButton';
import { InfoContext } from '../../contexts/InfoContext';

function BasicCalendar({ marginTop, children }) {
  const { dateCheckinAndCheckout, setDateCheckinAndCheckout } =
    useContext(InfoContext);

  function onChange(nextValue) {
    setDateCheckinAndCheckout(nextValue);
  }

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      marginTop={marginTop}
      background="#FFF"
    >
      <Calendar
        next2Label={<Icon as={FaChevronCircleRight} />}
        prev2Label={<Icon as={FaChevronCircleLeft} />}
        nextLabel={<Icon as={FaChevronRight} />}
        prevLabel={<Icon as={FaChevronLeft} />}
        value={dateCheckinAndCheckout}
        minDate={new Date()}
        onChange={onChange}
        maxDetail="month"
        minDetail="year"
        locale="pt-BR"
        selectRange
      />
      {children}
    </Box>
  );
}

export default BasicCalendar;
