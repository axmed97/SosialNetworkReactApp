import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../types/AuthTypes";

export const AuthReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOGOUT: {
      return {
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
