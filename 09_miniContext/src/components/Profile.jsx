import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext) // we need to import the "user" variable in the Profile.jsx page from the UserContext/UserContextProvider
    
    if (!user) return <div> No User, Please Login </div> 
    return <div> Welcome {user.username} </div> 
}

export default Profile
