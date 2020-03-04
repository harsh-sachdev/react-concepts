import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setCurrentUserAsync = user => ({
  type: UserActionTypes.SET_CURRENT_USER_ASYNC,
  payload: user
});
