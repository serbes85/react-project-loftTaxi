import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { loginRequest, loginSuccess, loginFailure, logout } from "./actions";

const isAuthorized = handleActions(
  {
    [loginRequest]: () => false,
    [loginSuccess]: () => true,
    [loginFailure]: () => false,
    [logout]: () => false,
  },
  false
);

const error = handleActions(
  {
    [loginRequest]: () => null,
    [loginSuccess]: () => null,
    [loginFailure]: (_state, action) => action.payload,
  },
  null
);

export default combineReducers({ isAuthorized, error });
export const getIsAuthorized = (state) => state.auth.isAuthorized;
export const getError = (state) => state.auth.error;
