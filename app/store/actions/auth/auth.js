import * as actionLabels from '../../actionLabels';

export const loginRequest = payload => ({
  type: actionLabels.LOGIN_REQUEST,
  payload,
});

export const loginRequestSuccess = () => ({
  type: actionLabels.LOGIN_REQUEST_SUCCESS,
});
