import isPromise from '../utils/common/isPromise';

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      const result = action(dispatch, getState, extraArgument);

      if (isPromise(result)) {
        return result.catch((error) => {
          return Promise.reject(error);
        });
      }
      return result;
    }
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
