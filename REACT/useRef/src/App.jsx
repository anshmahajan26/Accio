import { useRef } from "react"

function App() {
const inputRef = useRef(null);
function handleFocus(){
  inputRef.current.focus();
};
  return (
    <>
      <input ref={inputRef} type="text"></input>
      <button onClick={handleFocus}>focus on input box</button>
    </>
  )
}

export default App
