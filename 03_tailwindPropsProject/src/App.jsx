import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
 const [count, setCount] = useState (0)
 
 //cardName parameter is passed,so that all the card have different parameters as required
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      
      <Card cardName = "Pratik" about = "SDE @ Germany" btnText="About Me" />    
      <br />
      <Card cardName = "Hritik" about = "SDE @ India" btnText="Read More" />
      <br />
      <Card cardName = "Hari" about = "Architect @ Nepal" btnText="Get to know me"/>
     
    </>
  )
}

export default App
