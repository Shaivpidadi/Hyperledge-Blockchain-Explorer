import { all, takeEvery, put } from 'redux-saga/effects';
import { getBlocklistRequestSuccess } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

import axios from 'axios';

function* getBlocklostRequestSaga() {
  try {
    // const response = yield axiosMain.post('/login');

    // Temporary 
    const response = yield axios.get(`${process.env.EXPLORER_URL}/api/blockActivity/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6`);

    console.log({ response })
    if (response.status === 200) {
      yield put(getBlocklistRequestSuccess(response.data));
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionLabels.GET_BLOCK_LIST_REQUEST, getBlocklostRequestSaga)]);
}
