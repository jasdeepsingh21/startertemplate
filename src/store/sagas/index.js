import { all } from 'redux-saga/effects';
import loginWatcher from './loginSaga';

export default function* rootSaga() {
  yield all([loginWatcher()]);
}
