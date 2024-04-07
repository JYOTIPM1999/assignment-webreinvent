import { Users } from "../pages/Dashboard";

export const signupUser = (token: any) => {
  return {
    type: "SIGNUP_USER",
    payload: token,
  };
};
export const signInUser = (token: any) => {
  return {
    type: "SIGNIN_USER",
    payload: token,
  };
};

export const setUsers = (users: Users[]) => {
  return {
    type: "SET_USERS",
    payload: users,
  };
};
