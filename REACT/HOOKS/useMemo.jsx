import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  const expensiveCalculation = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  const result = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div>
      <h2>{result}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}