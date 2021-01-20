import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from './common/thunkMiddleware';
import rootReducer from './reducers';

const getStore = (initialState = {}) => {
  const middlewareList = [thunkMiddleware];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const middleware = composeEnhancers(applyMiddleware(...middlewareList));

  const store = middleware(createStore)(rootReducer, initialState);

  return store;
};
const store = getStore();
export default store;
