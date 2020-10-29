import { all, takeEvery, put } from 'redux-saga/effects';
import { getBlocklistRequestSuccess, showLoader, hideLoader } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* getBlocklostRequestSaga() {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel')

    const response = yield axiosMain.get(`/block/blockActivity/${currentChannel}`);

    if (response.status === 200) {
      yield put(getBlocklistRequestSuccess(response.data.row));
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
  yield all([yield takeEvery(actionLabels.GET_BLOCK_LIST_REQUEST, getBlocklostRequestSaga)]);
}
