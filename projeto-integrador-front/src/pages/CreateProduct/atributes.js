import { FaHelicopter, FaPlaneArrival } from 'react-icons/fa';
import { BiBath, BiDrink } from 'react-icons/bi';
import { GiCastle } from 'react-icons/gi';

const selected = false;

const atributes = [
  {
    name: 'Jacuzzi',
    icon: BiBath,
    selected,
  },
  {
    name: 'Heliponto',
    icon: FaHelicopter,
    selected,
  },
  {
    name: 'Eventos',
    icon: BiDrink,
    selected,
  },
  {
    name: 'Turismo local',
    icon: GiCastle,
    selected,
  },
  {
    name: 'Pista de pouso',
    icon: FaPlaneArrival,
    selected,
  },
];

export default atributes;
