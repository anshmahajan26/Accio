
import { useState } from "react"

function App() {
  const [count,setCount]= useState(0);
  

  function Incre(){
    setCount(count+1)
  }
  function Decre(){
    setCount(count-1)
  }
  return (
    <>
     <h1>{count}</h1>

      <button onClick={Incre}>
        Increment
      </button>
      <br>
      </br>
      <button onClick={Decre}>Decrement</button>
    </>
  )
}

export default App
