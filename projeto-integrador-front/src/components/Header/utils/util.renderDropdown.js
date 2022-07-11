import { useContext } from 'react';
import { InfoContext } from '../../../contexts/InfoContext';
import filterPlaces from '../../../utils/util.filterPlaces';

// seta os lugares a serem renderizados no dropdown de cidades
export default async function renderDropdown(_place, _cities, render) {
  const citiesArray = await _cities;
  console.log(citiesArray);
  render(filterPlaces(_place, citiesArray));
}
