import React, { useReducer } from "react";

// Initial value of our state
const initialState = 0;

// Reducer function
// state = current value
// action = tells us what operation to perform
function reducer(state, action) {

  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return 0;
  }

  // If action doesn't match anything
  return state;
}

function App() {

  // state = current counter value
  // dispatch = function used to send an action
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <h1>Counter: {state}</h1>

      {/* Send INCREMENT action */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +1
      </button>

      {/* Send DECREMENT action */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -1
      </button>

      {/* Send RESET action */}
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

    </div>
  );
}

export default App;