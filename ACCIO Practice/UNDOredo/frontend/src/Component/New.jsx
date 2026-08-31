import { useState } from "react";

function New(){
    const [input, setInput]= useState("");
    const [history, setHistory]= useState([]);
    const [future, setFuture]= useState([]);

    const handleInput = (event)=>{
        const newVal = event.target.value;
        setInput(newVal);
        setHistory([...history, input]);

    }
    const handleUndu = ()=>{
        const prevVal = history[History.length-1];
        setInput(prevVal);
        setHistory(history.slice(0, -1));
        setFuture(...future, input);
        
         
    }
   

    return(
        <>
        <input type="text" onChange={handleInput} value={input}></input>
        <button onClick={handleUndu} >Undo</button>
        <button >Redu</button>

        </>
    )
}
export default New;