import {
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
} from "../types/UserTypes";

const initialState = {
  data: null,
  success: false,
  isLoading: true,
};

export const getUserByToken = (token) => async (dispacth, state) => {
  try {
    dispacth({
      type: USER_DATA_LOADING,
      payload: initialState,
    });

    const result = await fetch("https://localhost:7002/api/Auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());
    initialState.data = result.data;
    initialState.isLoading = false;
    initialState.success = true;

    dispacth({
      type: USER_DATA_SUCCESS,
      payload: initialState,
    });
  } catch (error) {
    initialState.data = error;
    initialState.isLoading = false;
    initialState.success = false;
    dispacth({
      type: USER_DATA_ERROR,
      payload: initialState,
    });
  }
};
