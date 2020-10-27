import * as actionLabels from '../../actionLabels';

const initialState = {
  blockList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.GET_BLOCK_LIST_REQUEST_SUCCESS: {
      return {
        ...state,
        blockList: action.payload,
      };
    }
    default:
      return state;
  }
};
