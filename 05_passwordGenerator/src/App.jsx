import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useCallback(fn,[Dependencies]) 
  //useCallback is a react-hook, whenever there is any change in the dependencies, the function/callback function will be called
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //for characters in our password

    if(numberAllowed){
       str += Math.random() //for adding numbers to our password
    }
    if(charAllowed){
       str += "$€£¥&@%§+-*=<>"  //for adding specialChar to our password
    }
   
    
    for(const i = 1; i<=array.length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass = str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed, password ] )

  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly 
          />

          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={}
            />
            <label>Length: {length}</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
