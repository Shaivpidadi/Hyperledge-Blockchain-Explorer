import { all, takeEvery, put } from 'redux-saga/effects';
import { showLoader, hideLoader, getCurrentChannelRequestSuccess, logoutRequestSuccess, getChannelListRequestSuccess } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* getCurrentChannelRequestSaga() {
  try {
    yield put(showLoader());
    const response = yield axiosMain.get('/channel/curChannel');
    if (response.status === 200) {
      yield localStorage.setItem('currentChannel', response.data.currentChannel);
      yield put(getCurrentChannelRequestSuccess(response.data.currentChannel));
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

function* getChannelListRequestSaga() {
  try {
    yield put(showLoader());
    const response = yield axiosMain.get('/channels/info');
    if (response.status === 200) {
      yield put(getChannelListRequestSuccess(response.data.currentChannel));
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
    yield takeEvery(actionLabels.GET_CURRENT_CHANNEL_REQUEST, getCurrentChannelRequestSaga),
    yield takeEvery(actionLabels.GET_CHANNEL_LIST_REQUEST, getChannelListRequestSaga),
  ]);
}
