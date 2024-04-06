interface AppState {
  users: any[];
}

const initialState: AppState = {
  users: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SIGNIN_USER":
      return state;
    default:
      return state;
  }
};

export default rootReducer;
