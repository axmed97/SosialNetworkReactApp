import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../types/AuthTypes";

const initialState = {
  data: null,
  success: false,
  isLoading: true,
};

export const authLoginActions = (userEmail, userPassword) => async (dispatch, state) => {
    try {
      // Loading
      dispatch({
        type: USER_LOGIN,
        payload: initialState,
      });
      // Api Request
      let data = await fetch("https://localhost:7002/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      }).then((x) => x.json());
      initialState.data = data;
      initialState.isLoading = false;
      initialState.success = true;

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      // Success
    } catch (error) {
      // Error
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error,
      });
    }
  };

export const authLogout = () => async (dispatch, state) => {
    initialState.data = null;
    initialState.isLoading = false;
    initialState.success = false;

  dispatch({
    type: USER_LOGOUT,
    payload: initialState
  });

}


