/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put } from 'redux-saga/effects';
import { networkDetailsRequestSuccess, showLoader, hideLoader } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* networkDetailsRequestSaga() {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel')

    const response = yield axiosMain.get(`/status/${currentChannel}`);
    if (response.status === 200) {
      yield put(networkDetailsRequestSuccess(response.data));
      yield put(hideLoader());
    } else {
      console.log('error');
      yield put(hideLoader());
    }
  } catch (error) {
    if (error.message === 'Request failed with status code 401') {
      localStorage.clear();
    }
    yield put(hideLoader());
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionLabels.NETWORKLIST_REQUEST, networkDetailsRequestSaga),
  ]);
}
