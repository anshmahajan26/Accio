import React from "react";
import { useState } from "react";
//! this is to take state from Edit button in Add.jsx
//! it help us to take data from link where we add to Edit button we 
//! are fetching index and item from there to edit that specific task
import { useLocation, useNavigate } from "react-router-dom";

function Edit({show,setShow}){

//*here is logic to fetch the data from link to use here.
    const location = useLocation();
    const navigation = useNavigate();
    // we are using state from link
    const {task, index} = location.state;
//*--------------------------------------------------------

const [edit, setEdit]= useState(task);
    //!handle edit input
    const handleinput = (e)=>{
        setEdit(e.target.value);
    }
    const handleEdit = ()=>{
        //* previous array open using spread operator in updatedVal
        const updatedVal = [...show];
        //* updatedVal[index] index we fetch from location use to edit specific task
        updatedVal[index]= edit;
        //*here updated val set to setShow so using this setShow function it automatically update to show
        setShow(updatedVal);
        //to return to home page.
        navigation("/");
    }


    return(
        <>
        <h1>EDIT THE TASK</h1>
        <input type="text" name="taskedit" value={task} onChange={handleinput}></input>
        <button onClick={handleEdit}>Edit</button>
        </>
    )
}

export default Edit;