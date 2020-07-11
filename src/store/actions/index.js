import * as types from '../types';

export const loginAction = (data) => ({
  type: types.USER.LOGIN,
  data,
});

export const logoutAction = (data) => ({
  type: types.USER.LOGOUT,
  data,
});

export const searchAction = (data) => ({
  type: types.SEARCH.PLANET,
  data,
});
