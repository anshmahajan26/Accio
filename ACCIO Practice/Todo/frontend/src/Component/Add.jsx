import React from "react"
import { useState } from "react";
import Edit from "../Component/Edit";
import { Link } from "react-router-dom";
import axios from "axios";
function Add({ show, setShow }) {
    //to handle task in input filed this hook is used
    const [task, setTask] = useState("");


    //!input value handler
    const inputVal = (e) => {
        setTask(e.target.value);
    }
    //!form event handler and submit button handler.
    const handeSubmit = (e) => {
        e.preventDefault();

        if (!task) {
            alert("put task in input field first");
        } else {
            setShow([ task, ...show ]);
            setTask("");
        }
    }
    //! Delete button handler
    const onDel = (index) => {
        setShow(show.filter((item, i) => {
            return i !== index;
        }));
    }
    return (
        <>
            <h1>ADD TASK</h1>
            <br></br>
            <form onSubmit={handeSubmit}>
                <input type="text" name="task" value={task} onChange={inputVal}></input>
                <button type="submit" >ADD TASK</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <h1>TASK TO COMPLETE</h1>
            <ul>{
                show.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => onDel(index)}>Delete</button>
                        <Link to="/Edit" state={
                            {//!here to send current task which have to edit so 
                            //! this information send to edit
                                task: item,
                                index: index
                            }
                        }>
                            <button>Edit</button>
                        </Link>
                    </li>
                ))
            }</ul>


        </>
    )
}
export default Add;