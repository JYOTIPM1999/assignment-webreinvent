export const signupUser = (userData: any) => {
  return {
    type: "SIGNUP_USER",
    payload: userData,
  };
};
