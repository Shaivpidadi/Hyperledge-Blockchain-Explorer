import * as actionLabels from '../../actionLabels';

export const networkDetailsRequest = () => ({
  type: actionLabels.NETWORKLIST_REQUEST,
});

export const networkDetailsRequestSuccess = (payload) => ({
  type: actionLabels.NETWORKLIST_REQUEST_SUCCESS,
  payload
});
