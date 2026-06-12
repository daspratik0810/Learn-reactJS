import { useState } from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

// now all the components under <UserContextProvider> COMPONENTS </UserContextProvider>, will get the access to the context
  return (
    
      <UserContextProvider>
        <h1>React with chai </h1>
      </UserContextProvider>

  )
}

export default App
