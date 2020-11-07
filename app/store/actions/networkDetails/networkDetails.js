import * as actionLabels from '../../actionLabels';

export const networkDetailsRequest = () => ({
  type: actionLabels.NETWORK_REQUEST,
});

export const networkDetailsRequestSuccess = (payload) => ({
  type: actionLabels.NETWORK_REQUEST_SUCCESS,
  payload
});

export const getNetworkListRequest = () => ({
  type: actionLabels.GET_NETWORK_LIST_REQUEST,
});

export const getNetworkListRequestSuccess = (payload) => ({
  type: actionLabels.GET_NETWORK_LIST_REQUEST_SUCCESS,
  payload
});

export const getAuthNetworkListRequest = () => ({
  type: actionLabels.GET_AUTH_NETWORK_LIST_REQUEST
});

export const getAuthNetworkListRequestSuccess = (payload) => ({
  type: actionLabels.GET_AUTH_NETWORK_LIST_REQUEST_SUCCESS,
  payload
});
