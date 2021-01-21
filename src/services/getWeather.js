import API from '../utils/common/api';

export default async function getWeather() {
  return API.get({ url: '/api/weather' });
}
