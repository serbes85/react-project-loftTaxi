import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchAdressListSuccess,
  fetchRouteSuccess,
  routeClear,
} from "./actions";

const adresses = handleActions(
  {
    [fetchAdressListSuccess]: (_state, action) => action.payload,
  },
  []
);
const coords = handleActions(
  {
    [fetchRouteSuccess]: (_state, action) => action.payload,
    [routeClear]: () => [],
  },
  []
);
export default combineReducers({ adresses, coords });
export const getAdresses = (state) => state.route.adresses;
export const getCoords = (state) => state.route.coords;
