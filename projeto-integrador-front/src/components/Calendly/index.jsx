import { Icon, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import './calendar.css';
import {
  FaChevronRight,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaChevronLeft,
} from 'react-icons/fa';

function Calendly() {
  const [value, setValue] = useState(null);

  function onChange(nextValue) {
    setValue(nextValue);
  }
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <Calendar
        activeStartDate={new Date()}
        onChange={onChange}
        value={value}
        locale="pt-BR"
        minDate={new Date()}
        maxDetail="month"
        minDetail="year"
        selectRange
        nextLabel={<Icon as={FaChevronRight} />}
        next2Label={<Icon as={FaChevronCircleRight} />}
        prevLabel={<Icon as={FaChevronLeft} />}
        prev2Label={<Icon as={FaChevronCircleLeft} />}
      />
      <Text>Data: </Text>
    </>
  );
}

export default Calendly;
