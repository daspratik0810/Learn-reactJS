var firstNum = ""
var Oper = ""
var finalResult = 0

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
      return finalResult

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
       finalResult = Number(firstNum) % Number(inp)
      console.log(`${finalResult}  is the final result`);
    }
    displayResult(finalResult)
  }

  function DisplayResult(finalResult){
    if(!finalResult) return 0
    return finalResult
  }
  
  export default DisplayResult