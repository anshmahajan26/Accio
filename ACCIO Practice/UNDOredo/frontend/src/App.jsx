import { useState } from "react"

function App() {
  const [input,setInput]= useState("");
  const [history,setHistory]= useState([]);
  const[future,setFuture]= useState([]);

  const handleChange= (event)=>{
     const newValue = e.target.value;
     setHistory([...history, text]);
     setText(newValue);
    // setFuture([]);

  };

  return (
    <>
     <h1>UNDO REDU</h1>
     <input type="text" onChange={handleChange}></input>
    </>
  )
}

export default App
