import * as actionLabels from '../../actionLabels';

const initialState = {
  txsByOrg: [],
  txsByHour: [],
  txsByMinute: [],
  blockTxsList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.GET_TRANSACTION_BY_ORG_REQUEST_SUCCESS: {
      return {
        ...state,
        txsByOrg: action.payload,
      };
    }
    case actionLabels.GET_TRANSACTION_BY_HOUR_REQUEST_SUCCESS: {
      return {
        ...state,
        txsByHour: action.payload,
      };
    }
    case actionLabels.GET_TRANSACTION_BY_MINUTE_REQUEST_SUCCESS: {
      return {
        ...state,
        txsByMinute: action.payload,
      };
    }
    case actionLabels.GET_BLOCK_AND_TRANSACTION_LIST_REQUEST_SUCCESS: {
      return {
        ...state,
        blockTxsList: action.payload,
      };
    }
    default:
      return state;
  }
};
