import { all, takeEvery, put } from 'redux-saga/effects';
import { getBlocklistRequestSuccess, showLoader, hideLoader, getBlockDetailsRequestSuccess, logoutRequestSuccess } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* getBlocklistRequestSaga() {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel')

    const response = yield axiosMain.get(`/block/blockActivity/${currentChannel}`);

    if (response.status === 200) {
      yield put(getBlocklistRequestSuccess(response.data.row));
      yield put(hideLoader());
    } else {
      yield put(hideLoader());
    }
  } catch (error) {
    if (error.message === 'Request failed with status code 401') {
      yield put(logoutRequestSuccess());
      localStorage.clear();
    }
    yield put(hideLoader());
  }
}

function* getBlockDetailsRequestSaga({ payload }) {
  try {
    const { blockId } = payload;
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel')

    const response = yield axiosMain.get(`/block/${currentChannel}/${blockId}`);

    if (response.status === 200) {
      yield put(getBlockDetailsRequestSuccess(response.data));
      yield put(hideLoader());
    } else {
      yield put(hideLoader());
    }
  } catch (error) {
    if (error.message === 'Request failed with status code 401') {
      yield put(logoutRequestSuccess());
      localStorage.clear();
    }
    yield put(hideLoader());
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionLabels.GET_BLOCK_LIST_REQUEST, getBlocklistRequestSaga),
    yield takeEvery(actionLabels.GET_BLOCK_DETAILS_REQUEST, getBlockDetailsRequestSaga)
  ]);
}
