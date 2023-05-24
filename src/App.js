import Button from "./Components/Button";
import Screen from "./Components/Screen";

function App() {
  const output = "output: "

  return (
    <div className="App">
      <Screen display={output} />
      <Button text="0" />
      <Button text="1"/>
      <Button text="2"/>
      <Button text="3"/>
      <Button text="4"/>
      <Button text="5"/>
      <Button text="6"/>
      <Button text="7"/>
      <Button text="8"/>
      <Button text="9"/>
      <Button text="0"/>
      <Button text="."/>
      <Button text="AC"/>
      <Button text="+"/>
      <Button text="-"/>
      <Button text="*"/>
      <Button text="/"/>
      <Button text="="/>
    </div>
  );
}

export default App;
