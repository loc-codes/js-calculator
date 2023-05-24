import { useState } from "react";
import Number from "./Components/Number";
import Screen from "./Components/Screen";
import Operator from "./Components/Operator";

function App() {
  const output = 'output: '

  const [state, setState] = useState(() => {return 'output: '})

  const updateDisplay = (text) => {
    setState(prevState => prevState + text)
  }

  return (
    <div className="App">
      <Screen display={state}/>
      <Number text="0" pressed={updateDisplay}/>
      <Number text="1" pressed={updateDisplay}/>
      <Number text="2" pressed={updateDisplay}/>
      <Number text="3" pressed={updateDisplay}/>
      <Number text="4" pressed={updateDisplay}/>
      <Number text="5" pressed={updateDisplay}/>
      <Number text="6" pressed={updateDisplay}/>
      <Number text="7" pressed={updateDisplay}/>
      <Number text="8" pressed={updateDisplay}/>
      <Number text="9" pressed={updateDisplay}/>
      <Number text="0" pressed={updateDisplay}/>
      <Number text="." pressed={updateDisplay}/>
      <Operator text="AC"/>
      <Operator text="+" pressed={updateDisplay}/>
      <Operator text="-" pressed={updateDisplay}/>
      <Operator text="*" pressed={updateDisplay}/>
      <Operator text="/" pressed={updateDisplay}/>
      <Operator text="=" pressed={updateDisplay}/>
    </div>
  );
}

export default App;