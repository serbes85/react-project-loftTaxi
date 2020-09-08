import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fork } from "redux-saga/effects";
import auth, { sagas as authSagas } from "./Auth";
import route, { fetchAdressListWatcher, fetchRouteWatcher } from "./MapRoutes";
import { profileData } from "./Profile";

export function* rootSaga() {
  yield fork(authSagas);
  yield fork(fetchAdressListWatcher);
  yield fork(fetchRouteWatcher);
}

const reducers = {
  auth,
  route,
  profileData,
  form: formReducer,
};

export const reducer = combineReducers(reducers);
