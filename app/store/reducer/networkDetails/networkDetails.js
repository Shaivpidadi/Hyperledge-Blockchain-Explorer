import * as actionLabels from '../../actionLabels';

const initialState = {
  networkStats: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.NETWORKLIST_REQUEST_SUCCESS: {
      return {
        ...state,
        networkStats: action.payload,
      };
    }
    default:
      return state;
  }
};
