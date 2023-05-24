import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";

function App() {
  
  // State 1: The Operand State
  const [operand, updateOperand] = useState(() => {return ''})

  //State 2: The Expression State
  const [expression, setExpression] = useState(() => {return ''})

  
  const [display, setDisplay] = useState(() => {return 'display: '})
  

  const numberPress = (number, display) => {
    console.log(display)
    updateOperand(prevOperand => prevOperand += number)
    setDisplay(prevDisplay => prevDisplay += number)
  }

  const operatorPress = (operator) => {
    setExpression(prevExpression => prevExpression + operand)
    updateOperand('')
    setDisplay(`display: ${operator}`)
  }

  return (
    <div className="App">
      <Screen display={display}/>
      <Screen display={expression}/>
      <Number number="0" pressed={numberPress}/>
      <Number number="1" pressed={numberPress}/>
      <Number number="2" pressed={numberPress}/>
      <Number number="3" pressed={numberPress}/>
      <Number number="4" pressed={numberPress}/>
      <Number number="5" pressed={numberPress}/>
      <Number number="6" pressed={numberPress}/>
      <Number number="7" pressed={numberPress}/>
      <Number number="8" pressed={numberPress}/>
      <Number number="9" pressed={numberPress}/>
      <Number number="0" pressed={numberPress}/>
      <Number number="." pressed={numberPress}/>
      <Operator operator="AC" pressed={operatorPress}/>
      <Operator operator="+" pressed={operatorPress}/>
      <Operator operator="-" pressed={operatorPress}/>
      <Operator operator="*" pressed={operatorPress}/>
      <Operator operator="/" pressed={operatorPress}/>
      <Operator operator="=" pressed={operatorPress}/>
    </div>
  );
}

export default App;

//pseudo code of what I want to achieve
//numbers combine as a string until operator is pressed.
//then store number as x1

