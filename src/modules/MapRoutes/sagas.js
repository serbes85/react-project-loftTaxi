import {
  fetchAdressListRequest,
  fetchAdressListSuccess,
  fetchRouteRequest,
  fetchRouteSuccess,
} from "./actions";
import { getAddressList, getRoute } from "./api";
import { takeLatest, put, call } from "redux-saga/effects";

export function* fetchAdressListWatcher() {
  yield takeLatest(fetchAdressListRequest, fetchAdressListFlow);
}

export function* fetchAdressListFlow(action) {
  try {
    const result = yield call(getAddressList);

    yield put(fetchAdressListSuccess(result.addresses));
  } catch (error) {}
}

export function* fetchRouteWatcher() {
  yield takeLatest(fetchRouteRequest, fetchRouteFlow);
}

export function* fetchRouteFlow(action) {
  const { address1, address2 } = action.payload;

  try {
    const result = yield call(getRoute, address1, address2);

    yield put(fetchRouteSuccess(result));
  } catch (error) {}
}
