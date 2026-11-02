"use client"
import React, { useState } from "react"

const Calculator = () =>{
  const [display, setDisplay] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState<string | null>(null);;
  const [waitingforSecondNumber, setWaitingforSecondNumber] = useState(false);


  const handleNumber = (number:any)=>{
    if (display == "0" || waitingforSecondNumber){
      setDisplay(number)
      
      setWaitingforSecondNumber(false)
    } else {
      setDisplay(display + number)
    }
  }

    const handleOperator =(op:any)=>{
  setFirstNumber(Number(display))
  setOperator(op)
  setWaitingforSecondNumber(true);
    }

      const calculate = ()=>{
         if (!operator) {
    setDisplay("0");
    return;
  }
        const secondNumber = Number(display);

        let result;

        if(operator === "+"){
          result = firstNumber + secondNumber;
        }else if (operator === "-"){
          result = firstNumber - secondNumber;
        }else if (operator === "*"){
          result = firstNumber * secondNumber;
        }else if (operator === "/"){
          result = firstNumber / secondNumber;
        }
        
        setDisplay(String(result))
        setFirstNumber(0);
        setOperator(null)
      }
      const clear = ()=>{
        setDisplay("0");
        setFirstNumber(0);
        setOperator(null);
        setWaitingforSecondNumber(false);
      };
      return(
        <main className="calculator">
          <h1>My Calculator</h1>
          <input value={`${display}`} readOnly />

          <div>
            <button onClick={clear}>C</button>
            <button onClick={()=>handleOperator("/")}>÷</button>
            <button onClick={()=>handleOperator("*")}>*</button>
            <button onClick={()=>handleOperator("-")}>-</button>
          </div>

           <div>
            <button onClick={()=>{handleNumber("7")}}>7</button>
            <button  onClick={()=>{handleNumber("8")}}>8</button>
            <button onClick={()=>{handleNumber("9")}}>9</button>
            <button onClick={()=>{handleOperator("+")}}>+</button>
          </div>

           <div>
            <button onClick={()=>{handleNumber("4")}}>4</button>
            <button onClick={()=>{handleNumber("5")}}>5</button>
            <button onClick={()=>{handleNumber("6")}}>6</button>
              <button onClick={calculate}>=</button>
          </div>

           <div>
            <button onClick={()=>{handleNumber("1")}}>1</button>
            <button onClick={()=>{handleNumber("2")}}>2</button>
            <button onClick={()=>{handleNumber("3")}}>3</button>
          </div>
          <button onClick={()=>{handleNumber("0")}}>0</button>
        </main>
      )
}
export default Calculator;