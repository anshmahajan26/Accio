import { useState } from "react";

function New(){
    const [input, setInput]= useState("");
    const [history, setHistory]= useState([]);
    const [future, setFuture]= useState([]);

    const handleInput = (event)=>{
        const newVal = event.target.value;
        setInput(newVal);
        setHistory([...history, input]);
        setFuture([]);

    }
    const handleUndu = ()=>{
        const prevVal = history[history.length-1];
        setInput(prevVal);
        setHistory(history.slice(0, -1));
        setFuture([...future, input]);
        console.log(input);
    }
    const handleRedu = ()=>{
        let a =0;
        const nxtVal = future[a];
        setInput(nxtVal);
        a++;
        console.log(input);
          
        
    }
   

    return(
        <>
        <input type="text" onChange={handleInput} value={input}></input>
        <button onClick={handleUndu} >Undo</button>
        <button onClick={handleRedu}>Redu</button>
        <h1>{input}</h1>
        

        </>
    )
}
export default New;