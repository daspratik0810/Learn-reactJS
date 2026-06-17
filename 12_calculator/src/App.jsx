import { useState } from 'react'

import './App.css'

function App() {
var firstNum = ""
var Oper = ""

function numInp(inp) {
  if(Oper.length == 0){
   firstNum += inp
   console.log(firstNum);
  } 
  else result(firstNum, Oper, inp)
  }
  
  function signInp (sign){
    Oper = sign
  }
  
  function result (firstNum, Oper, inp){
    if(Oper === "+"){
      const finalResult = Number(firstNum) + Number(inp)
      console.log(`${finalResult}  is the final result`);
    }
    if(Oper === "-"){
      const finalResult = Number(firstNum) - Number(inp)
      console.log(`${finalResult}  is the final result`);
    }
    if(Oper === "/"){
      const finalResult = Number(firstNum) / Number(inp)
      console.log(`${finalResult}  is the final result`);
    }
    if(Oper === "%"){
      const finalResult = Number(firstNum) % Number(inp)
      console.log(`${finalResult}  is the final result`);
    }
    
  }
  
  


  
  return (
  <>
    <div className="m-9 p-8 border-4 border-indigo-500">
      <div className='p-8 border-2 border-purple-500 '>
    OUTPUT
      </div>
      {/* LEFT INPUT */}
      <div className=' m-8 border-2 border-purple-500'>
        <div className=' space-x-4 m-8 border-2 border-green-500'>
          
          <button onClick={() => consoleMsg("(")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'>
          (
          </button>
          
          <button onClick={() => signInp(")")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'>)</button>
          <button onClick={() => signInp("%")}  className=' m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> %</button>
          <button onClick={() => consoleMsg("AC")}  className=' ml-8  p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> AC </button>
          <br />
          <button onClick={() => numInp("7")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 7</button>
          <button onClick={() => numInp("8")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 8</button>
          <button onClick={() => numInp("9")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 9</button>
           <button onClick={() => signInp("/")} className='ml-8 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> / </button>
          <br />
          <button onClick={() => numInp("4")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 4</button>
          <button onClick={() => numInp("5")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 5</button>
          <button onClick={() => numInp("6")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 6</button>
           <button onClick={() => signInp("*")} className='ml-8 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> * </button>
          <br />
          <button onClick={() => numInp("1")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 1</button>
          <button onClick={() => numInp("2")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 2</button>
          <button onClick={() => numInp("3")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 3</button>
          <button onClick={() => signInp("-")} className='ml-8 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> - </button>
          <br />
          <button onClick={() => numInp("0")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> 0</button>
          <button onClick={() => numInp(".")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'>.</button>
          <button onClick={() => consoleMsg("=")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> =</button>
          <button onClick={() => signInp("+")} className='ml-8 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'> + </button>
        </div>
       
      </div>
    </div>
    
  </>
  )
}

export default App
