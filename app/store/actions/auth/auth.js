import * as actionLabels from '../../actionLabels';

export const loginRequest = () => ({
  type: actionLabels.LOGIN_REQUEST,
});

export const loginRequestSuccess = () => ({
  type: actionLabels.LOGIN_REQUEST_SUCCESS,
});
