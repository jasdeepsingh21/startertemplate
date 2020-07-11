import * as types from '../types';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH.PLANET_SUCCESS:
      console.log('AT searchReducer REDUCER :', action);
      return {
        ...state,
        searchList: [...action.payload],
      };
    default:
      return state;
  }
};
export default searchReducer;
