import { useState, useEffect } from "react";

function App() {

  // Stores the remaining time in seconds
  const [time, setTime] = useState(60);

  // Stores whether the countdown is running
  const [running, setRunning] = useState(false);


  // This runs whenever running changes
  useEffect(() => {

    // Variable to store the timer
    let timer;

    // Start countdown only when running is true
    if (running === true) {

      timer = setInterval(() => {

        // Decrease time by 1
        setTime((previousTime) => {

          // If time reaches 0, stop countdown
          if (previousTime === 1) {
            setRunning(false);
            return 0;
          }

          // Decrease time by 1
          return previousTime - 1;
        });

      }, 1000);
    }


    // Stop the timer when running becomes false
    return () => {
      clearInterval(timer);
    };

  }, [running]);


  // Start the countdown
  const handleStart = () => {
    setRunning(true);
  };


  // Stop the countdown
  const handleStop = () => {
    setRunning(false);
  };


  // Reset the countdown
  const handleReset = () => {
    setRunning(false);
    setTime(60);
  };


  return (
    <div>

      <h1>Countdown Timer</h1>

      {/* Display remaining time */}
      <h2>{time} seconds</h2>


      {/* Start button */}
      <button onClick={handleStart}>
        Start
      </button>


      {/* Stop button */}
      <button onClick={handleStop}>
        Stop
      </button>


      {/* Reset button */}
      <button onClick={handleReset}>
        Reset
      </button>

    </div>
  );
}

export default App;