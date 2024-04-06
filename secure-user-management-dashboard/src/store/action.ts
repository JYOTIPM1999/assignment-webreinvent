export const signupUser = (userData: any) => {
  return {
    type: "SIGNUP_USER",
    payload: userData,
  };
};
export const signInUser = (userData: any) => {
  return {
    type: "SIGNIN_USER",
    payload: userData,
  };
};
