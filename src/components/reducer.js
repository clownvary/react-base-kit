import { WEATHER_FAIL, WEATHER_SUCCESS } from './const';

const initialState = {
  weatherData: null,
  errorInfo: null,
};

function weather(state = initialState, action) {
  switch (action.type) {
    case WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
      };
    case WEATHER_FAIL:
      return {
        ...state,
        errorInfo: action.payload,
      };
    default:
      return state;
  }
}

export default weather;
