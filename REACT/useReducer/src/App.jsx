import { useReducer } from "react"
const intialState =0;

function reducer(state,action){
  switch(action.type){
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state -1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function App() {
const [count,dispatch] = useReducer(reducer,intialState);

  return (
    <>
    <div>
     <h1>{count}</h1>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
    <button onClick = {()=>dispatch({type:"DECREMENT"})}>-</button>
    <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    </div>
    </>
  )
}

export default App
