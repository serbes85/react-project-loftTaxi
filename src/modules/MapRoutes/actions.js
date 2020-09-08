import { createAction } from "redux-actions";

export const fetchAdressListRequest = createAction(
  "MAPROUTES/FETCH_ADRESSLIST_REQUEST"
);
export const fetchAdressListSuccess = createAction(
  "MAPROUTES/FETCH_ADRESSLIST_SUCCESS"
);
export const fetchRouteRequest = createAction("MAPROUTES/FETCH_ROUTE_REQUEST");
export const fetchRouteSuccess = createAction("MAPROUTES/FETCH_ROUTE_SUCCESS");
export const routeClear = createAction("MAPROUTES/ROUTE_CLEAR");
