import { useState } from "react"

function App() {
const [pass, setPass]= useState("");
const [show, setShow] = useState(false);
const handleInput = (event)=>{
  setPass(event.target.value);
}
const showclick = ()=>{
 setShow(true);
}
const hideclick = ()=>{
  setShow(false);
}
let inputType = "password"
if(show){
  inputType = "text";
}

  return (
    <>
      <input name="pass" value={pass} type={inputType} onChange={handleInput}></input>
      <button onClick={showclick}>show</button>
      <button onClick={hideclick}>hide</button>
    </>
  )
}

export default App
