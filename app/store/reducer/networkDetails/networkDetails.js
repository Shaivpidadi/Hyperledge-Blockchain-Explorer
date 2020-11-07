import * as actionLabels from '../../actionLabels';

const initialState = {
  networkStats: {},
  networkList: [],
  authNetworkList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.NETWORK_REQUEST_SUCCESS: {
      return {
        ...state,
        networkStats: action.payload,
      };
    }
    case actionLabels.GET_NETWORK_LIST_REQUEST_SUCCESS: {
      return {
        ...state,
        networkList: action.payload,
      };
    }
    case actionLabels.GET_AUTH_NETWORK_LIST_REQUEST_SUCCESS: {
      return {
        ...state,
        authNetworkList: action.payload,
      };
    }
    default:
      return state;
  }
};
