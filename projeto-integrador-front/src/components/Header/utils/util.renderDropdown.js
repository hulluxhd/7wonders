import filterPlaces from '../../../utils/util.filterPlaces';

  // seta os lugares a serem renderizados no dropdown de cidades
 export default async function renderDropdown(_place, _cities, render) {
    const citiesArray = await _cities;
    render(filterPlaces(_place, citiesArray));
  }
