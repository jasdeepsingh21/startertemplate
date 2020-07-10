import { takeLatest } from 'redux-saga/effects';
import * as type from '../types';

function* LoginWorker(action) {
  yield console.log('login worker at SAGA', action);
}

export default function* loginWatcher() {
  yield takeLatest(type.USER.LOGIN, LoginWorker);
}
