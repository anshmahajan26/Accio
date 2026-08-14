import { useState } from "react"

function App() {
const [on, setOn]= useState(false);

const handleButton= ()=>{
  setOn(!on);
}
let op = on;
  if(on==false){
     op = "OFF";
  }else{
     op = "ONN";
  }

  return (
    <>
      <h1 style={{color:"red"}}>{op}</h1>
      <button onClick={handleButton}>toggle</button>
    </>
  )
}

export default App
