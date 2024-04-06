import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { signinUser } from "./actions";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // dispatch(signinUser({ email, password }));
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
};

export default SignIn;
