import { combineReducers } from 'redux';
import weather from '../components/reducer';

const rootReducer = combineReducers({
  weather,
});
export default rootReducer;
