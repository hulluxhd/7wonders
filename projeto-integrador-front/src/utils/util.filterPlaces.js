// função que filtra os lugares baseado na busca do usuário
function filterPlaces(_place, _data) {
  if (_place.city) {
    return _data.filter(
      city => city.cityName.toLowerCase().includes(_place.city.toLowerCase()) ||
        city.cityCountry.toLowerCase().includes(_place.city.toLowerCase())
    );
  }
  return _data;
}

export default filterPlaces;
