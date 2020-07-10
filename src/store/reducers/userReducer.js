import * as types from '../types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER.SAVED_DATA:
      console.log('AT USER REDUCER :', action);
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};
export default userReducer;
