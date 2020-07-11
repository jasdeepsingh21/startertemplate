import { takeLatest, call, put } from 'redux-saga/effects';
import * as type from '../types';
import { envUrl, endPoint } from '../../util/constants';
import { getCallWithParams } from '../../util/apiSignature';

function* SearchWorker(action) {
  yield console.log('action: search worker :', action);
  const { response, error } = yield call(
    getCallWithParams,
    `${envUrl.baseUrl}${endPoint.search}?search=${action.data}`,
  );
  console.log('response :', response);
  const resObj = response.data;

  if (resObj.count > 0) {
    yield put({
      type: type.SEARCH.PLANET_SUCCESS,
      payload: [...resObj.results],
    });
  } else {
    console.log(error);
    const data = {
      msg: `Not Found`,
      flagType: 'error',
    };

    yield put({ type: type.SHOW_ERROR, data });
  }
}
export default function* searchWatcher() {
  yield takeLatest(type.SEARCH.PLANET, SearchWorker);
}
