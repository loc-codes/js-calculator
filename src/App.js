import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";
import Equals from "./Components/Equals";

function App() {
  
  // State 1: The Operand State
  const [operand, updateOperand] = useState(() => {return ''})

  //State 2: The Expression State
  const [expression, setExpression] = useState(() => {return ''})

  //State 3: The Display
  const [display, setDisplay] = useState(() => {return 'display:'})
  

  const numberPress = (number,display) => {
    if (display.slice(-1) == '+'){setDisplay('display: ')}
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
      return answer
    })
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
      <Operator operator="AC" pressed={operatorPress}/>
      <Operator operator="+" pressed={operatorPress}/>
      <Operator operator="-" pressed={operatorPress}/>
      <Operator operator="*" pressed={operatorPress}/>
      <Operator operator="/" pressed={operatorPress}/>
      <Equals operator="=" pressed={equalsPress}/>
    </div>
  );
}

export default App;

//pseudo code of what I want to achieve
//numbers combine as a string until operator is pressed.
//then store number as x1

