import { combineReducers } from 'redux';

import weather from '../pages/Weather/reducer';

const rootReducer = combineReducers({
  weather,
});
export default rootReducer;
