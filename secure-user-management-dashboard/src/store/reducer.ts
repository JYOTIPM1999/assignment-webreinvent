import { Users } from "../pages/Dashboard";

interface AppState {
  token: string | null;
  users: Users[];
}

const initialState: AppState = {
  token: null,
  users: [],
};

const rootReducer = (state = initialState, action: any) => {
  // console.log("action", action);
  switch (action.type) {
    case "SIGNIN_USER":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
