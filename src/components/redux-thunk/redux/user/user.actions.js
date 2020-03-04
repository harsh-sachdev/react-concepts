import { UserActionTypes } from "./user.types";

//Thunk will only detact action which are not object

// export const setCurrentUser = user => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user
// });

export const setCurrentUser = user => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
      });
    }, 2000);
  };
};
