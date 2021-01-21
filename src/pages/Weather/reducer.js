/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import { produce } from 'immer';

import * as ACTIONS from './actionTypes';

const initState = {
  weatherData: null,
  errorInfo: null,
};

const reducers = handleActions(
  {
    [ACTIONS.GET_WEATHER]: produce((draft, action) => {
      draft.weatherData = action.payload;
      draft.errorInfo = 'no error';
    }),
  },
  initState,
);

export default reducers;
