import './App.css'
import { useState } from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

// now all the components under <UserContextProvider> COMPONENTS </UserContextProvider>, will get the access to the context
  return (
    
      <UserContextProvider>
        <h1>React with chai </h1>
        <Login />
        <Profile />

      </UserContextProvider>

  )
}

export default App
