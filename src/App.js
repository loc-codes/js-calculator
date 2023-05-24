import { useState } from "react";
import Button from "./Components/Button";
import Screen from "./Components/Screen";

function App() {
  const output = 'output: '

  const [state, setState] = useState(() => {return 'output: '})

  const updateDisplay = (text) => {
    setState(prevState => prevState + text)
  }

  return (
    <div className="App">
      <Screen display={state}/>
      <Button text="0" pressed={updateDisplay}/>
      <Button text="1" pressed={updateDisplay}/>
      <Button text="2" pressed={updateDisplay}/>
      <Button text="3" pressed={updateDisplay}/>
      <Button text="4" pressed={updateDisplay}/>
      <Button text="5" pressed={updateDisplay}/>
      <Button text="6" pressed={updateDisplay}/>
      <Button text="7" pressed={updateDisplay}/>
      <Button text="8" pressed={updateDisplay}/>
      <Button text="9" pressed={updateDisplay}/>
      <Button text="0" pressed={updateDisplay}/>
      <Button text="."/>
      <Button text="AC"/>
      <Button text="+" pressed={updateDisplay}/>
      <Button text="-" pressed={updateDisplay}/>
      <Button text="*" pressed={updateDisplay}/>
      <Button text="/" pressed={updateDisplay}/>
      <Button text="=" pressed={updateDisplay}/>
    </div>
  );
}

export default App;
