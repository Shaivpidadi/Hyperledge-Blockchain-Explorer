/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put } from 'redux-saga/effects';
import { loginRequestSuccess } from '../../actions';
import * as actionLabels from '../../actionLabels';
import axiosMain from '../../../http/axios/axiosMain';

// eslint-disable-next-line no-unused-vars
function* loginRequestSaga({ payload }) {
  try {
    const { username, password } = payload;
    const response = yield axiosMain.post('/auth/login', {
      username,
      password,
    });
    if (response.status === 200) {
      yield localStorage.setItem('userToken', response.headers['x-auth-token']);
      yield localStorage.setItem(
        'userData',
        JSON.stringify(response.data.userData),
      );
      yield put(
        loginRequestSuccess({
          authToken: response.headers['x-auth-token'],
          userData: response.data.userData,
        }),
      );
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionLabels.LOGIN_REQUEST, loginRequestSaga)]);
}
