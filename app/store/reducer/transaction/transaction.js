import * as actionLabels from '../../actionLabels';

const initialState = {
  txsByOrg: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.GET_TRANSACTION_BY_ORG_REQUEST_SUCCESS: {
      return {
        ...state,
        txsByOrg: action.payload,
      };
    }
    default:
      return state;
  }
};
