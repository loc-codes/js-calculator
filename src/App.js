import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";
import Equals from "./Components/Equals";
import Clear from "./Components/Clear";

function App() {
  const operators = ['+','-','*','/']
  // State 1: The Operand State
  const [operand, updateOperand] = useState(() => {return ''})

  //State 2: The Expression State
  const [expression, setExpression] = useState(() => {return ''})

  //State 3: The Display
  const [display, setDisplay] = useState(() => {return 'display:'})
  

  const numberPress = (number,display) => {
    updateOperand(prevOperand => prevOperand += number)
    setDisplay(prevDisplay => prevDisplay += number)
    
  }

  const operatorPress = (operator) => {
    setExpression(prevExpression => prevExpression + operand + operator)
    updateOperand('')
    setDisplay(`display: ${operator}`)
  }

  const equalsPress = () => {
    setExpression(prevExpression => {
      const answer = eval(prevExpression + operand)
      setDisplay(`display: ${answer}`)
    })
  }

  const clearPress = () => {
    setExpression('')
    updateOperand('')
    setDisplay('display: ')
  }

  return (
    <div className="App">
      <Screen display={display}/>
      <Screen display={expression}/>
      <Number number="0" display={display} pressed={numberPress}/>
      <Number number="1" display={display} pressed={numberPress}/>
      <Number number="2" display={display} pressed={numberPress}/>
      <Number number="3" display={display} pressed={numberPress}/>
      <Number number="4" display={display} pressed={numberPress}/>
      <Number number="5" display={display} pressed={numberPress}/>
      <Number number="6" display={display} pressed={numberPress}/>
      <Number number="7" display={display} pressed={numberPress}/>
      <Number number="8" display={display} pressed={numberPress}/>
      <Number number="9" display={display} pressed={numberPress}/>
      <Number number="0" display={display} pressed={numberPress}/>
      <Number number="." display={display} pressed={numberPress}/>
      <Clear pressed={clearPress}/>
      <Operator operator="+" pressed={operatorPress}/>
      <Operator operator="-" pressed={operatorPress}/>
      <Operator operator="*" pressed={operatorPress}/>
      <Operator operator="/" pressed={operatorPress}/>
      <Equals pressed={equalsPress}/>
    </div>
  );
}

export default App;

//TO DO:
//1. Fix operators display
//2. Make it sure it can do two expressions
//3. Get AC working
//4. Get decimals working