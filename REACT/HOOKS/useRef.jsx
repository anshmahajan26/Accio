import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;



// import { useRef, useState } from "react";

// function App() {
//   const timerRef = useRef(null);
//   const [seconds, setSeconds] = useState(0);

//   const startTimer = () => {
//     if (timerRef.current !== null) return;

//     timerRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   };

//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//     setSeconds(0);
//   };

//   return (
//     <div>
//       <h2>{seconds}</h2>

//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// export default App;