import { all } from 'redux-saga/effects';
import loginWatcher from './loginSaga';
import searchWatcher from './searchSaga';

export default function* rootSaga() {
  yield all([loginWatcher(), searchWatcher()]);
}
