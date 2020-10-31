import * as actionLabels from '../../actionLabels';

const initialState = {
  blockList: [],
  blockDetails: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.GET_BLOCK_LIST_REQUEST_SUCCESS: {
      return {
        ...state,
        blockList: action.payload,
      };
    }
    case actionLabels.GET_BLOCK_DETAILS_REQUEST_SUCCESS: {
      return {
        ...state,
        blockDetails: action.payload,
      };
    }
    default:
      return state;
  }
};
