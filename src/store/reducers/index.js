import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';
import errorMessageReducer from './errorMessageReducer';
import searchReducer from './searchReducer';

const appReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  error: errorMessageReducer,
  search: searchReducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'USER_SIGNOUT') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
