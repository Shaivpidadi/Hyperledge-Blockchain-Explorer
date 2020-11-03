import { all, takeEvery, put } from 'redux-saga/effects';
import { showLoader, hideLoader, getTransactionByOrgRequestSuccess, getTransactionByHourRequestSuccess, getTransactionByMinuteRequestSuccess, getBlockAndTransactionsListRequest, getBlockAndTransactionsListRequestSuccess, getTransactionListRequestSuccess, getTransactionDetailsRequestSuccess, logoutRequestSuccess } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

function* getTransactionByOrgRequestSaga() {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel');

    const response = yield axiosMain.get(`/txByOrg/${currentChannel}`);
    if (response.status === 200) {
      yield put(getTransactionByOrgRequestSuccess(response.data.rows));
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

function* getTransactionByHourRequestSaga() {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel');

    const response = yield axiosMain.get(`/txByHour/${currentChannel}/2`);
    if (response.status === 200) {
      yield put(getTransactionByHourRequestSuccess(response.data.rows));
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

function* getTransactionByMinuteRequestSaga() {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel');

    const response = yield axiosMain.get(`/txByMinute/${currentChannel}/1`);
    if (response.status === 200) {
      yield put(getTransactionByMinuteRequestSuccess(response.data.rows));
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

function* getBlockAndTxsListRequestSaga({ payload }) {
  try {
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel');

    const response = yield axiosMain.get(`/blockAndtxList/${currentChannel}/0${!!payload ? '?' + payload : ''}`);
    if (response.status === 200) {
      yield put(getBlockAndTransactionsListRequestSuccess(response.data.rows));
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

function* getTransactionListRequestSaga({ payload }) {
  try {
    const { number, txId } = payload
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel');

    const response = yield axiosMain.get(`/transactions/list/${currentChannel}/${number}/${txId}${!!payload?.query ? '?' + payload.query : ''}`);
    if (response.status === 200) {
      yield put(getTransactionListRequestSuccess(response.data.rows));
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

function* getTransactionDetailsRequestSaga({ payload }) {
  try {
    const { txId } = payload;
    yield put(showLoader());
    const currentChannel = localStorage.getItem('currentChannel');

    const response = yield axiosMain.get(`/transaction/${currentChannel}/${txId}`);
    if (response.status === 200) {
      yield put(getTransactionDetailsRequestSuccess(response.data.row));
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
    yield takeEvery(actionLabels.GET_TRANSACTION_BY_ORG_REQUEST, getTransactionByOrgRequestSaga),
    yield takeEvery(actionLabels.GET_TRANSACTION_BY_HOUR_REQUEST, getTransactionByHourRequestSaga),
    yield takeEvery(actionLabels.GET_TRANSACTION_BY_MINUTE_REQUEST, getTransactionByMinuteRequestSaga),
    yield takeEvery(actionLabels.GET_BLOCK_AND_TRANSACTION_LIST_REQUEST, getBlockAndTxsListRequestSaga),
    yield takeEvery(actionLabels.GET_TRANSACTION_LIST_REQUEST, getTransactionListRequestSaga),
    yield takeEvery(actionLabels.GET_TRANSACTION_DETAILS_REQUEST, getTransactionDetailsRequestSaga)
  ]);
}
