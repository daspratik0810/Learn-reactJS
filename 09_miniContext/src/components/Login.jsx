import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState(""); //to set/change the value of the username
  const [password, setPassword] = useState(""); //to set/change the value of the password

  const {setUser} = useContext(UserContext) //we can access setUser due to useContext, as the variable setUser is passed in the UserContext/UserContextProvider
  

  const handleSubmit = () => {};

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
}

export default Login;
