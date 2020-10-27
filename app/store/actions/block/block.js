import * as actionLabels from '../../actionLabels';

export const getBlocklistRequest = () => ({
  type: actionLabels.GET_BLOCK_LIST_REQUEST,
});

export const getBlocklistRequestSuccess = () => ({
  type: actionLabels.GET_BLOCK_LIST_REQUEST_SUCCESS,
});
