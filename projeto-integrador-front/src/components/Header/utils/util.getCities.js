import baseApi from '../../../services/service.baseApi';
import url from '../../../services/urls';

export default async function getCities() {
  const cities = await baseApi.get(url.CITIES);
  const { data } = cities;
  return data;
}
