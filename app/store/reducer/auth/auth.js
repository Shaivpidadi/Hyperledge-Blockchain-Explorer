import * as actionLabels from '../../actionLabels';

const initialState = {
  isLogin: false,
  userToken: localStorage.getItem('userToken'),
  userData: localStorage.getItem('userData'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        userToken: action.payload,
        isLogin: true,
      };
    }
    default:
      return state;
  }
};
