import baseApi from '../../../services/service.baseApi';

export default async function getCities() {
  const cities = await baseApi.get('cities');
  const { data } = cities;
  return data;
}
