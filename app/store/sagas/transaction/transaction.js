import { all, takeEvery, put } from 'redux-saga/effects';
import { showLoader, hideLoader, getTransactionByOrgRequestSuccess, getTransactionByHourRequestSuccess, getTransactionByMinuteRequestSuccess } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* getTransactionByOrgRequestSaga() {
  try {
    yield put(showLoader());
    // Temporary
    const response = yield axiosMain.get('/txByOrg/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6');
    if (response.status === 200) {
      yield put(getTransactionByOrgRequestSuccess(response.data.rows));
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

function* getTransactionByHourRequestSaga() {
  try {
    yield put(showLoader());
    // Temporary
    const response = yield axiosMain.get('/txByHour/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6/2');
    if (response.status === 200) {
      yield put(getTransactionByHourRequestSuccess(response.data.rows));
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

function* getTransactionByMinuteRequestSaga() {
  try {
    yield put(showLoader());
    // Temporary
    const response = yield axiosMain.get('/txByMinute/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6/10');
    if (response.status === 200) {
      yield put(getTransactionByMinuteRequestSuccess(response.data.rows));
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
    yield takeEvery(actionLabels.GET_TRANSACTION_BY_ORG_REQUEST, getTransactionByOrgRequestSaga),
    yield takeEvery(actionLabels.GET_TRANSACTION_BY_HOUR_REQUEST, getTransactionByHourRequestSaga),
    yield takeEvery(actionLabels.GET_TRANSACTION_BY_MINUTE_REQUEST, getTransactionByMinuteRequestSaga)
  ]);
}
