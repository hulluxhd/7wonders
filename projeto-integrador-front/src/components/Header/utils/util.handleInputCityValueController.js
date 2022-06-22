function handleInputCityValueController(_place) {
  if (_place.city && _place.country) {
    return `${_place.city}, ${_place.country}`;
  }
  return _place.city;
}

export default handleInputCityValueController;
