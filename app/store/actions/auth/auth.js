import * as actionLabels from '../../actionLabels';

export const loginRequest = payload => ({
  type: actionLabels.LOGIN_REQUEST,
  payload,
});

export const loginRequestSuccess = (payload) => ({
  type: actionLabels.LOGIN_REQUEST_SUCCESS,
  payload
});

export const logoutRequest = () => ({
  type: actionLabels.LOGOUT_REQUEST
});

export const logoutRequestSuccess = () => ({
  type: actionLabels.LOGOUT_REQUEST_SUCCESS
});

export const resetApp = () => ({
  type: actionLabels.RESET_APP
});
