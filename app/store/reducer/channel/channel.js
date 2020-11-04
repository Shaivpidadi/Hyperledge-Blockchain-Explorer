import * as actionLabels from '../../actionLabels';

const initialState = {
  currentChannel: localStorage.getItem('currentChannel'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.GET_CURRENT_CHANNEL_REQUEST_SUCCESS: {
      return {
        ...state,
        currentChannel: action.payload,
      };
    }
    case actionLabels.GET_CHANNEL_LIST_REQUEST_SUCCESS: {
      return {
        ...state,
        currentChannel: action.payload,
      };
    }
    default:
      return state;
  }
};
