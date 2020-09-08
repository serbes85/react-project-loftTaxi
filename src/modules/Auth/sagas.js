import { loginRequest, loginSuccess, loginFailure } from "./actions";
import { auth } from "./api";
import { takeLatest, put, call } from "redux-saga/effects";

function* fetchAuthWatcher() {
  yield takeLatest(loginRequest, fetchAuthFlow);
}

export function* fetchAuthFlow(action) {
  const { userName, userPassword } = action.payload;
  try {
    const result = yield call(auth, userName, userPassword);

    yield put(loginSuccess(result));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default fetchAuthWatcher;
