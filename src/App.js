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
  

  const numberPress = (number) => {
    updateOperand(prevOperand => prevOperand += number)
    setDisplay(prevDisplay => prevDisplay += number)
    
  }

  const operatorPress = (operator) => {
    if (operatorState === false){
      setExpression(prevExpression => prevExpression + operand)
      updateOperand('')
      setDisplay(`display: ${operator}`)

      setOperatorState(prevState => ({
        ...prevState,
        status: true,
        operator: operator
      }));
    }
    
    if (operatorState.status === true){
      setDisplay(`display: ${operator}`) 
      setOperatorState(prevState => ({
        ...prevState,
        operator: operator
      }));
    }
    
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
//1. Fix operators display
//2. Make it sure it can do two expressions
//3. Get decimals working