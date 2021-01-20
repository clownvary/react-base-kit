import axios from 'axios';
import { WEATHER_FAIL, WEATHER_SUCCESS } from './const';

export const fetchWeatherAsyncAction = () => (dispatch) =>
  axios
    .get('http://localhost:9991/api/weather')
    .then((res) => {
      const { data } = res;
      return dispatch({ type: WEATHER_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: WEATHER_FAIL, payload: error.message });
      return Promise.reject(error);
    });

export default fetchWeatherAsyncAction;
