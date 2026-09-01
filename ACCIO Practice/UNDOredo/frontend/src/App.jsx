//this is undo redo
import { useState } from "react";
import New from "./Component/New";

function App() {

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);


  // Input change
  const handleChange = (event) => {

    const newValue = event.target.value;

    // Store current value in history
    setHistory([...history, input]);

    // Set new value
    setInput(newValue);

    // Clear redo
    setFuture([]);
  };


  // Undo
  const handleUndo = () => {

    // Nothing to undo
    if (history.length === 0) {
      return;
    }

    // Get last value
    const previousValue = history[history.length - 1];

    // Current value goes to future
    setFuture([input, ...future]);

    // Previous value becomes current
    setInput(previousValue);

    // Remove last history value
    setHistory(history.slice(0, -1));
   
  };


  // Redo 
  const handleRedo = () => {

    // Nothing to redo
    if (future.length === 0) {
      return;
    }

    // Get first future value
    const nextValue = future[0];

    // Current value goes to history
    setHistory([...history, input]);

    // Future value becomes current
    setInput(nextValue);

    // Remove first future value
    setFuture(future.slice(1));
  };


  return (
    <>
      <h1>UNDO REDO</h1>

      <input
        type="text"
        value={input}
        onChange={handleChange}
      />

      <button onClick={handleUndo}>
        Undo
      </button>

      <button onClick={handleRedo}>
        Redo
      </button>

      <h3>Current: {input}</h3>
      <New />
    </>
  );
}

export default App;