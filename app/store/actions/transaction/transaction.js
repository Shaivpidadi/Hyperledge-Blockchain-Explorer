import * as actionLabels from '../../actionLabels';

export const getTransactionByOrgRequest = () => ({
  type: actionLabels.GET_TRANSACTION_BY_ORG_REQUEST,
});

export const getTransactionByOrgRequestSuccess = (payload) => ({
  type: actionLabels.GET_TRANSACTION_BY_ORG_REQUEST_SUCCESS,
  payload,
});

export const getTransactionByHourRequest = () => ({
  type: actionLabels.GET_TRANSACTION_BY_HOUR_REQUEST,
});

export const getTransactionByHourRequestSuccess = (payload) => ({
  type: actionLabels.GET_TRANSACTION_BY_HOUR_REQUEST_SUCCESS,
  payload,
});

export const getTransactionByMinuteRequest = () => ({
  type: actionLabels.GET_TRANSACTION_BY_MINUTE_REQUEST,
});

export const getTransactionByMinuteRequestSuccess = (payload) => ({
  type: actionLabels.GET_TRANSACTION_BY_MINUTE_REQUEST_SUCCESS,
  payload,
});

export const getBlockAndTransactionsListRequest = (payload) => ({
  type: actionLabels.GET_BLOCK_AND_TRANSACTION_LIST_REQUEST,
  payload
});

export const getBlockAndTransactionsListRequestSuccess = (payload) => ({
  type: actionLabels.GET_BLOCK_AND_TRANSACTION_LIST_REQUEST_SUCCESS,
  payload,
});

export const getTransactionListRequest = (payload) => ({
  type: actionLabels.GET_TRANSACTION_LIST_REQUEST,
  payload
});

export const getTransactionListRequestSuccess = (payload) => ({
  type: actionLabels.GET_TRANSACTION_LIST_REQUEST_SUCCESS,
  payload,
});

export const getTransactionDetailsRequest = (payload) => ({
  type: actionLabels.GET_TRANSACTION_DETAILS_REQUEST,
  payload
});

export const getTransactionDetailsRequestSuccess = (payload) => ({
  type: actionLabels.GET_TRANSACTION_DETAILS_REQUEST_SUCCESS,
  payload,
});
