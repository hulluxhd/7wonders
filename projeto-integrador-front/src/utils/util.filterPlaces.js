// função que filtra os lugares baseado na busca do usuário
function filterPlaces(_place, _data) {
  console.log(_data);
  if (_place.city) {
    return _data.filter(
      city => city.name.toLowerCase().includes(_place.city.toLowerCase()) ||
        city.country.toLowerCase().includes(_place.city.toLowerCase())
    );
  }
  return _data;
}

export default filterPlaces;
