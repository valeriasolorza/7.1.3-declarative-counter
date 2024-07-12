import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Current count: {counter} </h2>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement} disabled={counter <= 0}>-1</button>
    </div>
  )
}

export default App;