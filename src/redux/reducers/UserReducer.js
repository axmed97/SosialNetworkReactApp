import {
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
} from "../types/UserTypes";

export const UserReducer = (state = { userinfo: [] }, action) => {
  switch (action.type) {
    case USER_DATA_LOADING:
      return {
        ...state,
        userinfo: action.payload,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        userinfo: action.payload,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        userinfo: action.payload,
      };
    default:
      return state;
  }
};
