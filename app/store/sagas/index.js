/* eslint-disable import/prefer-default-export */
import { all } from 'redux-saga/effects';

import dummySagas from './dummy/dummy';
import authSagas from './auth/auth';

export default function* rootSaga() {
  yield all([dummySagas(), authSagas()]);
}
