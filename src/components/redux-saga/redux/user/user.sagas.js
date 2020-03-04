import { takeEvery, put, delay } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { setCurrentUserAsync } from "./user.actions";

export function* changeUsernameAsync({payload}) {
  yield delay(4000);
  yield put(setCurrentUserAsync(payload));
}

export function* changeUsername() {
  yield takeEvery(UserActionTypes.SET_CURRENT_USER, changeUsernameAsync);
}
