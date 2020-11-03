import * as actionLabels from '../../actionLabels';

const initialState = {
  userToken: localStorage.getItem('userToken'),
  userData: localStorage.getItem('userData'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        userToken: action.payload,
      };
    }
    case actionLabels.LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        userToken: null,
        userData: null,
      };
    }
    default:
      return state;
  }
};
