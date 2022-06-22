import {
  Box, Icon
} from '@chakra-ui/react';
import { useContext } from 'react';
import Calendar from 'react-calendar';
import {
  FaChevronRight,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaChevronLeft,
} from 'react-icons/fa';
import { InfoContext } from '../../contexts/InfoContext';
import './calendar.css';

function BasicCalendar({
  marginTop, showDoubleView, width, children, position
}) {
  const { dateCheckinAndCheckout, setDateCheckinAndCheckout } =
    useContext(InfoContext);

  function onChange(nextValue) {
    setDateCheckinAndCheckout(nextValue);
  }

  return (
    <Box
      className="calendar-wrapper"
      position={position || 'relative'}
      top={0}
      left={0}
      marginTop={marginTop}
      background="#FFF"
      borderRadius="0.25rem"
      width={width}
    >
      <Calendar
        next2Label={<Icon as={FaChevronCircleRight} />}
        prev2Label={<Icon as={FaChevronCircleLeft} />}
        nextLabel={<Icon as={FaChevronRight} />}
        prevLabel={<Icon as={FaChevronLeft} />}
        showDoubleView={showDoubleView}
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
