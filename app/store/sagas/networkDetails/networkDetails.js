/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put } from 'redux-saga/effects';
import { networkDetailsRequestSuccess, showLoader } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* networkDetailsRequestSaga({ payload }) {
  try {
    yield put(showLoader());
    const response = yield axiosMain.get(
      '/status/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6',
    );
    if (response.status === 200) {
      yield put(networkDetailsRequestSuccess(response.data));
      yield put(hideLoader());
    } else {
      console.log('error');
      yield put(hideLoader());
    }
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(
      actionLabels.NETWORKLIST_REQUEST,
      networkDetailsRequestSaga,
    ),
  ]);
}
