import { combineReducers } from "redux";

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, token: action.payload, error: null };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, token: null, error: action.payload };
    case "LOGOUT":
      return { ...state, token: null, error: null };
    default:
      return state;
  }
};

const reducers = {
  userLogin: authReducer,
};

export default combineReducers(reducers);
