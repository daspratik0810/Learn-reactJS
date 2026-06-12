import React, { useState } from "react";
import UserContext from "./UserContext";

//this is a method, which will pass data/variable to all the children/child-components of a main component that needs it
//good thing avout useContext is that, Unlike propDrilling we do not need to do pass the variables/data from App to every parentcomponent until the component where we want that variable
// we pass the data/variable only to the components that needs it
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value ={{user, setUser}} >
         {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider