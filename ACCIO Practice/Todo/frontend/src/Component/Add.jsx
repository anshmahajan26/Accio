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
    const handeSubmit = async (e) => {
        e.preventDefault();

        if (!task) {
            alert("put task in input field first");
        } else {
            let response = await axios.post("http://localhost:8080/",{
                task:task
            });
            setShow([response.data, ...show ]);
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
                show.map((item) => (
                    <li key={item._id}>
                        {item.task} <button onClick={() => onDel(index)}>Delete</button>
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