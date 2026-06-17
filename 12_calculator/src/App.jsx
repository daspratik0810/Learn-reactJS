import { useState } from 'react'
import './App.css'

//Final result to display on the displayBox
function DisplayResult({ value }) {
  return (
    <div className="text-right text-3xl font-semibold">
      {value}
    </div>
  )
}

function App() {
  const [formula, setFormula] = useState('')
  const [displayValue, setDisplayValue] = useState('0')

  //all the values comes together into one and gets into formula and display box
  const updateFormula = (next) => {
    setFormula(next)
    setDisplayValue(next)
  }

  //when we press a number, it adds to the default formula and keeps on adding to it
  const numInp = (inp) => {
    updateFormula(formula + inp)
  }
    //when we press a SIGN/OPERATOR, it handles it
  const signInp = (sign) => {
    if (!formula && sign !== '(') return  // this line avoids +-/* and allows only "(" to be applied in the start
    
    const lastChar = formula.slice(-1)  //this takes the last character of the formula
    const operators = '+-*/%'     
    if (operators.includes(lastChar) && operators.includes(sign)) {   //the first half  avoids last character not to be a sign  and second half avoids the new button(again sign)to be pressed, so if the last character in formula is already an operator and the new button pressed is also an operator. If both are true, then you replace the old operator with the new one instead of adding a second operator.
      updateFormula(formula.slice(0, -1) + sign)  //this replaces the previous operator with new one
      return
    }
    updateFormula(formula + sign)
  }

  //it will reset the formula if AC is pressed
  const consoleMsg = (cmd) => {
    if (cmd === 'AC') {
      updateFormula('')
      return
    }

    //it will evaluate the formula and give error message if it has error
    if (cmd === '=') {
      try {
        const result = eval(formula || '0') 
        const text = String(result)   //this will showcase the final result on the displayBox
        updateFormula(text)
      } catch (error) {
        setDisplayValue('Error')  //this will showcase error message if anything goes wrong
      }
    }
  }

  return (
  <>
    <div className="m-9 p-8 border-4 border-indigo-500">
      <div className='p-8 border-2 border-purple-500'>
        <DisplayResult value={displayValue} />
      </div>
      {/* INPUT */}
      <div className=' m-8 border-2 border-purple-500'>
        <div className=' space-x-4 m-8 border-2 border-green-500'>
          
          <button onClick={() => signInp("(")} className='m-2 p-5 border-2 border-purple-500 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'>
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
