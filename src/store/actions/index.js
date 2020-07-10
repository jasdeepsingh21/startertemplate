import * as types from '../types';

export const loginAction = (data) => ({
  type: types.USER.LOGIN,
  data,
});
