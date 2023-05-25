import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";
import Equals from "./Components/Equals";
import Clear from "./Components/Clear";

function App() {
  // State 1: The Operand State
  const [operand, updateOperand] = useState(() => {return ''})

  //State 2: The Expression State
  const [expression, setExpression] = useState(() => {return ''})

  //State 3: The Display
  const [display, setDisplay] = useState(() => {return 'display:'})
  
  //State 4: New Calculation
  const [newCalculation, setNewCalculation] = useState(() => {return true})

  //State 5: Operator State
  const [operatorState, setOperatorState] = useState(() => {return false})

  const numberPress = (number) => {
    if (operatorState === true){
      setOperatorState(false)
      setDisplay('display: ')
    }
    if (newCalculation === true){
      setDisplay('display: ')
      setNewCalculation(false)
    }
    updateOperand(prevOperand => prevOperand += number)
    setDisplay(prevDisplay => prevDisplay += number)
    
  }

  const operatorPress = (operator) => {
    if (operatorState === false){
      setOperatorState(true)
      setExpression(prevExpression => prevExpression + operand + operator)
      updateOperand('')
      setDisplay(`display: ${operator}`)
    }
    else if (operatorState === true){
      setExpression(prevExpression => prevExpression.slice(0,-1) + operator)
      setDisplay(`display: ${operator}`)
    }
  }

  const equalsPress = () => {
    setExpression(prevExpression => {
      const answer = eval(prevExpression + operand)
      setDisplay(`display: ${answer}`)
    })
    updateOperand('')
    setExpression('')
    setNewCalculation(true)
  }

  const clearPress = () => {
    setExpression('')
    updateOperand('')
    setDisplay('display: ')
    setNewCalculation(true)
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
//1. Make sure calculator can't press operator twice
//2. Get decimals working
//3. Styling