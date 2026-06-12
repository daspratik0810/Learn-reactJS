import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState(""); //to set/change the value of the username
  const [password, setPassword] = useState(""); //to set/change the value of the password

  const {setUser} = useContext(UserContext) //we can access setUser due to useContext, as the variable setUser is passed in the UserContext/UserContextProvider, so we took access of that using useContext functionality
  //we specifically got access of setUser as in Login we need to set the details for the User, while in the other Profile we need access of "user" and not "setUser" as in Profile we need to get the details for the Userand not set it
  // so we set/export user details in Login.jsx via "setUser" from UserContextProvider
  // and we get/import user details in Profile.jsx via "user" from UserContextProvider
  const handleSubmit = (e) => {
    e.preventDefault()  //it is to prevent default action of the submit(reloading of the page), and we can build custom logics to handle the event 
    setUser({username, password})   //now username and password will be exported to the User (in UserContextProvider)
  };
    


  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
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
