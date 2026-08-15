import React from "react"
function Add() {


    return (
        <>
            <h1>ADD TASK</h1>
            <br></br>
            <form>
                <input type="text" name="task" value={task}></input>
                <button>ADD TASK</button>
            </form>

        </>
    )
}
export default Add;