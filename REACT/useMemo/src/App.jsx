import { useMemo, useState } from "react";
import UseCallbackkk from "./Component/UseCallbackkk";

function App() {

  // const [count, setCount] = useState(0);
  // const [num, setNum] = useState(5);

  // // Expensive function
  // function expensiveCalculation(n) {
  //   console.log("Calculating...");
  //   return n * 2;
  // }

  // // Memoized result
  // const result = useMemo(() => {
  //   return expensiveCalculation(num);
  // }, [num]);

  return (
    <div style={{ padding: "20px" }}>
      {/* <h2>Count: {count}</h2>

      <h2>Number: {num}</h2>

      <h2>Result: {result}</h2>

      <br />

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button
        onClick={() => setNum(num + 1)}
        style={{ marginLeft: "10px" }}
      >
        Increment Num
      </button> */}

      <UseCallbackkk />
    </div>

    
  );
}

export default App;