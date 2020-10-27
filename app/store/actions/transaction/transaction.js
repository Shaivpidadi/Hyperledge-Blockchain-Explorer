import * as actionLabels from '../../actionLabels';

export const getTransactionByOrgRequest = () => ({
    type: actionLabels.GET_TRANSACTION_BY_ORG_REQUEST,
});

export const getTransactionByOrgRequestSuccess = (payload) => ({
    type: actionLabels.GET_TRANSACTION_BY_ORG_REQUEST_SUCCESS,
    payload,
});
