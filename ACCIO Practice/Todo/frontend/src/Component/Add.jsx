import React from "react"
import { useState } from "react";

function Add() {
//to handle task in input filed this hook is used
const [task,setTask]= useState("");
//this is store input field task and display using map
const [show,setShow]= useState([]);

//!input value handler
const inputVal = (e)=>{
    setTask(e.target.value);
}
//!form event handler and submit button handler.
const handeSubmit = (e)=>{
    e.preventDefault();
    
    if(!task){
        alert("put task in input field first");
    }else{
         setShow([...show,task]);
        setTask("");
    } 
}
//! Delete button handler
const onDel = (index)=>{
    setShow(show.filter((item, i)=>{
        i !== index;
    }));
}
    return (
        <>
            <h1>ADD TASK</h1>
            <br></br>
            <form onSubmit={handeSubmit}>
                <input type="text" name="task"  onChange={inputVal}></input>
                <button type="submit" >ADD TASK</button>
            </form>
            <br></br>
             <br></br>
              <br></br>
            <h1>TASK TO COMPLETE</h1>
            <ul>{
                show.map((item,index)=>(
                    <li key={index}>
                        {item} <button onClick={onDel}>Delete</button>
                    </li>
                ))
                }</ul>
             

        </>
    )
}
export default Add;