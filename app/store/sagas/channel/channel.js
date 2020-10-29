import { all, takeEvery, put } from 'redux-saga/effects';
import { showLoader, hideLoader, getCurrentChannelRequestSuccess } from '../../actions';
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
      console.log('error');
      yield put(hideLoader());
    }
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionLabels.GET_CURRENT_CHANNEL_REQUEST, getCurrentChannelRequestSaga)]);
}
