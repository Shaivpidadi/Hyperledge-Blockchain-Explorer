import * as actionLabels from '../../actionLabels';

export const loginRequest = payload => ({
  type: actionLabels.LOGIN_REQUEST,
  payload,
});

export const loginRequestSuccess = (payload) => ({
  type: actionLabels.LOGIN_REQUEST_SUCCESS,
  payload
});
