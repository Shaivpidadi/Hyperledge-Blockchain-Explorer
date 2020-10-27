/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put } from 'redux-saga/effects';
import { loginRequestSuccess, showLoader, hideLoader } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

// eslint-disable-next-line no-unused-vars
function* loginRequestSaga({ payload }) {
  try {
    const { user, password, network } = payload;
    yield put(showLoader());
    const response = yield axiosMain.post('/login', {
      network,
      user,
      password,
    });

    if (response.status === 200) {
      yield localStorage.setItem('userToken', response.data.token);
      yield localStorage.setItem(
        'userData',
        JSON.stringify(response.data.user),
      );
      yield put(
        loginRequestSuccess({
          authToken: response.data.token,
          userData: response.data.user,
        }),
      );
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
  yield all([yield takeEvery(actionLabels.LOGIN_REQUEST, loginRequestSaga)]);
}
