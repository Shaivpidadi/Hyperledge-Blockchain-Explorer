import * as actionLabels from '../../actionLabels';

export const getBlocklistRequest = () => ({
  type: actionLabels.GET_BLOCK_LIST_REQUEST,
});

export const getBlocklistRequestSuccess = (payload) => ({
  type: actionLabels.GET_BLOCK_LIST_REQUEST_SUCCESS,
  payload,
});

export const getBlockDetailsRequest = (payload) => ({
  type: actionLabels.GET_BLOCK_DETAILS_REQUEST,
  payload
});

export const getBlockDetailsRequestSuccess = (payload) => ({
  type: actionLabels.GET_BLOCK_DETAILS_REQUEST_SUCCESS,
  payload
});