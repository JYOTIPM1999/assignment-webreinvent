interface AppState {
  token: string | null;
}

const initialState: AppState = {
  token: null,
};

const rootReducer = (state = initialState, action: any) => {
  // console.log(state, action);
  switch (action.type) {
    case "SIGNIN_USER":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
