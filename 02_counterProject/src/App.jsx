import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//react controls the UI updation, using hooks we can update UI elements(also at multiple places at a time) in the UI 

function App() {
  //let counterValue = 5

  //this single line is hooks, which is used to update the UI element very easily
  let [counterValue,setCounterValue] = useState(5)  //here 5 is the default value that counter has

  function Increase(){
    if(counterValue == 20){
     return
    } 
    
    counterValue = counterValue+1
    setCounterValue(counterValue)
    console.log(counterValue);
  }

  function Decrease(){
    if(counterValue == 0){
      return
    }
    counterValue = counterValue-1
    setCounterValue(counterValue)
    console.log(counterValue);
  }
  
  return (
    <>
     <h1>Chai aur React First project</h1>
     <h2>Counter value : {counterValue}</h2>

     <button onClick={Increase}>Increase Value</button>
     <br />
     <button onClick={Decrease}>Decrease Value</button>
    </>
  )
}

export default App
