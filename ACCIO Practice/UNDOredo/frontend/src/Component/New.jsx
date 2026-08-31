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
    const handleUndo = ()=>{
        const prevVal = history[history.length -1];
        setFuture(input,...future);
    }

    return(
        <>
        <input type="text" ></input>
        </>
    )
}
export default New;