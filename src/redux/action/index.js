import axios from "axios";

export const login = (phoneNumber) => {
  return (dispatch) => {
    dispatch(loginRequest());
  
  };
};

export const logout = () => ({
  type: "LOGOUT",
});

const loginRequest = () => ({
  type: "LOGIN_REQUEST",
});

const loginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});

const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
