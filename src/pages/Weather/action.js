import { createAction } from 'redux-actions';

import getWeatherService from '../../services/getWeather';
import * as ACTIONS from './actionTypes';

const getWeather = createAction(ACTIONS.GET_WEATHER);

export const getWeatherAction = () => async (dispatch) => {
  const res = await getWeatherService();
  return dispatch(getWeather(res));
};

export default getWeatherAction;
