import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";
import Equals from "./Components/Equals";
import Clear from "./Components/Clear";
import "./App.css"

function App() {
  // State 1: The Operand State
  const [operand, setOperand] = useState(() => {return ''})

  //State 2: The Operator State
  const [currentOperator, setOperator] = useState(() => {return ''})

  //State 3: The Decimal State
  const [decimal, setDecimal] = useState(() => {return false})

  //State 4: The Expression 
  const [expression, setExpression] = useState(() => {return ''})

  //State 5: The Display
  const [display, setDisplay] = useState(() => {return '0'})

  //State 6: The Result
  const [result, setResult] = useState(() => {return ''})

  const numberPress = (number) => {
    //after equals logic
    if (result !== '' && currentOperator === '' && operand === ''){
      clearPress()
    }

    //after operator logic
    if (currentOperator != ''){
      setExpression(prevExpression => prevExpression + currentOperator)
      setOperator('')
      setDisplay('')
    }

    //handle leading zero logic
    if (number !== '0' && operand[0] === '0' && operand[1] !== '.' && !decimal) {
      setOperand(number);
    } 
    else if (display.length < 11) { // limit to 12 digits
      setOperand(prevOperand => prevOperand + number)
    }

    //handle decimal logic

    if (display === '0'){    //blank screen logic 
      setDisplay(`${number}`)
    }
    else if (display.length < 11) {
      setDisplay(prevDisplay => prevDisplay + number)
    }
  }
    

  const decimalPress = (number) => {
    if (decimal === true){
      //pass
    }
    else{
      if (currentOperator !== '' && decimal === false){
      }

      else if (currentOperator === '' && decimal === false){
        setOperand(prevOperand => prevOperand + ".")
        setDecimal(true)
        setDisplay(prevDisplay => prevDisplay + number)
      }

      
    }
  }
    
  const operatorPress = (operator) => {
    let newOperand = operand //added to deal with async

    //blank screen logic
    if (expression === '' && operand === '' && result === ''){newOperand = '0'}

    //after number logic
    if (currentOperator === ''){
      setExpression(prevExpression => prevExpression + newOperand)
      setOperand('')
      setOperator(operator)
      setDisplay(`${operator}`)
      setDecimal(false)
    }

    else if (currentOperator !== '' && operator === '-'){
      setOperator(prevOperator => {
        const newOperator = prevOperator + operator
        setDisplay(newOperator)
        return newOperator})
    }

    else {
      setOperator(operator)
      setDisplay(`${operator}`)
    }
    
    
  }
    

  const equalsPress = () => {
    setExpression(prevExpression => {
        const evalExpression = prevExpression + operand
        let answer = eval(evalExpression)

        // Format large numbers to fit on the screen
        if (answer > 99999999999 || answer < -9999999999) {
          answer = answer.toPrecision(6)
          
        }

        setResult(answer)
        setDisplay(`${answer}`)
        return answer
      })
    setOperand('')
    setOperator('')
  }
    

  const clearPress = () => {
      setOperand('')
      setOperator('')
      setResult('')
      setExpression('')
      setDisplay('0')
      setDecimal(false)
    }

  return (
    <div className="App">
      <div id="inner">
        
        
        
        <div className="grid" id="keyboard">
        <p id="logo">Loc.calculator</p>
        <Screen id="display" display={display}/>
        <Clear id="clear" pressed={clearPress}/>
        <Operator id="multiply" operator="*" pressed={operatorPress}/>
        <Operator id="divide" operator="/" pressed={operatorPress}/>
        <Number id="seven" number="7" pressed={numberPress}/>
        <Number id="eight" number="8" pressed={numberPress}/>
        <Number id="nine" number="9" pressed={numberPress}/>
        <Operator id="subtract" operator="-" pressed={operatorPress}/>
        <Number id="four" number="4" pressed={numberPress}/>
        <Number id="five" number="5" pressed={numberPress}/>
        <Number id="six" number="6" pressed={numberPress}/>
        <Number id="one" number="1" pressed={numberPress}/>
        <Number id="two" number="2" pressed={numberPress}/>
        <Number id="three" number="3" pressed={numberPress}/>
        <Operator id="add" operator="+" pressed={operatorPress}/>
        <Number id="zero" number="0" pressed={numberPress}/>
        <Number id="decimal" number="." pressed={decimalPress}/>
        <Equals id="equals" pressed={equalsPress}/>
      </div>


      </div>
    </div>
  );
}

export default App;
