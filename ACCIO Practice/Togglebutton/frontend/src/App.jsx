import { useState } from "react"
import axios from "axios";

function App() {
const [on, setOn]= useState(false);

const handleButton= async ()=>{
  const res = !on
  setOn(res);
  await axios.post("http://localhost:8080/",{
    toggle : res
  });
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
