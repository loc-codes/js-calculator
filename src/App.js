import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";
import Equals from "./Components/Equals";
import Clear from "./Components/Clear";

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
  const [display, setDisplay] = useState(() => {return 'display: 0'})

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
      setDisplay('display: ')
    }

    //press zero logic
    if (number !== '0' && operand[0] === '0' && operand[1] !== '.') {
      setOperand(number);
    } 
    else {
      setOperand(prevOperand => prevOperand + number)
    }

    if (display === 'display: 0'){    //blank screen logic 
      setDisplay(`display: ${number}`)
      //setExpression('')  
    }
    else{
    setDisplay(prevDisplay => prevDisplay + number)
    }
  }
    

  const decimalPress = (number) => {
    if (decimal === true){
      //pass
    }
    else{
      if (currentOperator !== '' && decimal === false){
        setOperand("0.")
        setOperator('')
      }

      else if (currentOperator === '' && decimal === false){
        setOperand(prevOperand => prevOperand + ".")
      }

      setDecimal(true)
      setDisplay(prevDisplay => prevDisplay + number)
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
    }

    setOperator(operator)
    setDisplay(`display: ${operator}`)
    setDecimal(false)
  }
    

  const equalsPress = () => {
    setExpression(prevExpression => {
        const evalExpression = prevExpression + operand
        const answer = eval(evalExpression)
        setResult(answer)
        setDisplay(`display: ${answer}`)
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
      setDisplay('display: ')
      setDecimal(false)
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
      <Number number="." pressed={decimalPress}/>
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
//1. Get decimals working
//2. Test cases
//3. styling