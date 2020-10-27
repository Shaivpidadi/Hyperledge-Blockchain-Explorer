import * as actionLabels from '../../actionLabels';

const initialState = {
  loader: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.SHOW_LOADER: {
      return {
        ...state,
        loader: true,
      };
    }
    case actionLabels.HIDE_LOADER: {
      return {
        ...state,
        loader: false,
      };
    }
    default:
      return state;
  }
};
