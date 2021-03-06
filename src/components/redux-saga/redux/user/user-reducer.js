import { UserActionTypes } from "./user.types";

const INTIAL_STATE = {
  currentUser: "Milan"
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER_ASYNC:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
