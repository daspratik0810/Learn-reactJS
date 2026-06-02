import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'


function MyApp(){
  return(
    <div>
      <h1>My app is working !!</h1>
    </div>

  ) 
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Click me to go to google</a>
)

const yetAnotherElement = React.createElement(
  "a",//tagname
  {href:"https://google.com", target:"_blank"}, //attributes
  "click me to visit google"  //innerHTML text
)

createRoot(document.getElementById('root')).render(

      //<MyApp />
      //anotherElement
      //yetAnotherElement
)
