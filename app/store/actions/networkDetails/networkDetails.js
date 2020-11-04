import * as actionLabels from '../../actionLabels';

export const networkDetailsRequest = () => ({
  type: actionLabels.NETWORK_REQUEST,
});

export const networkDetailsRequestSuccess = (payload) => ({
  type: actionLabels.NETWORK_REQUEST_SUCCESS,
  payload
});
