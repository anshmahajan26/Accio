import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset
} from "./CounterSlice";

function App() {

  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>

      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

    </div>
  );
}

export default App;