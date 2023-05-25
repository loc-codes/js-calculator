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
    if (newCalculation === true){
      setDisplay('display: ')
      setExpression('')
      updateOperand('')
      setNewCalculation(false)
    }

    if (operatorState === true){
      setOperatorState(false)
      setDisplay('display: ')
    }
    updateOperand(prevOperand => prevOperand += number)
    setDisplay(prevDisplay => prevDisplay += number)
    
  }

  const operatorPress = (operator) => {
    if (newCalculation === true && expression===''){return ''}
    else if (newCalculation === true){setNewCalculation(false)}
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
    setNewCalculation(true)
  }

  const clearPress = () => {
    setNewCalculation(true)
    setDisplay('display: ')
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
      <p>Note: This calculator evaluates using BIDMAS order of operations</p>
    </div>
  );
}

export default App;

//TO DO:
//1. Allow users to continue to operations after pressing equal
//2. Get decimals working
//3. Fix double equals bug -> if you press equal twice, you get undefined
//3. Styling
