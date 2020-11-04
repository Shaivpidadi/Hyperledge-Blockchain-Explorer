import * as actionLabels from '../../actionLabels';

export const networkDetailsRequest = () => ({
  type: actionLabels.NETWORK_REQUEST,
});

export const networkDetailsRequestSuccess = (payload) => ({
  type: actionLabels.NETWORK_REQUEST_SUCCESS,
  payload
});

export const networkListRequest = () => ({
  type: actionLabels.NETWORK_LIST_REQUEST,
});

export const networkListRequestSuccess = (payload) => ({
  type: actionLabels.NETWORK_LIST_REQUEST_SUCCESS,
  payload
});
