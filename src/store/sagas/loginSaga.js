import { takeLatest, call, put } from 'redux-saga/effects';
import * as type from '../types';
import { envUrl, endPoint } from '../../util/constants';
import { getCallWithParams } from '../../util/apiSignature';

function* LoginWorker(action) {
  const { response, error } = yield call(
    getCallWithParams,
    `${envUrl.baseUrl}${endPoint.login}?search=${action.data.userName}`,
  );
  const resObj = response.data;

  if (resObj.count > 0) {
    const pass = resObj.results[0].birth_year;
    if (action.data.password === pass) {
      console.log(' USER AUTHENTICATED', pass);

      localStorage.setItem('user', JSON.stringify(resObj.results[0]));
      yield put({
        type: type.USER.SAVED_DATA,
        payload: { ...resObj.results[0] },
      });
      action.data.history.push('/app/dashboard');
    } else {
      const data = {
        msg: 'Password invalid !',
        flagType: 'error',
      };

      yield put({ type: type.SHOW_ERROR, data });
    }
  } else {
    console.log(error);
    const data = {
      msg: `Invalid userName`,
      flagType: 'error',
    };

    yield put({ type: type.SHOW_ERROR, data });
  }
}
function* LogoutWorker(action) {
  console.log('logout called', action);
  yield localStorage.clear();
  action.data.push('/');
}
export default function* loginWatcher() {
  yield takeLatest(type.USER.LOGIN, LoginWorker);
  yield takeLatest(type.USER.LOGOUT, LogoutWorker);
}
