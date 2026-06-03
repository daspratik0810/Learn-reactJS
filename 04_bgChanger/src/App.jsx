import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    </div>
  )
}

export default App
