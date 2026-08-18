import { useState } from "react"
function Login(){
    const [email, setEmail]= useState("");
    const [ pass, setPass]= useState("");
   const[user,setUser]= useState({
    email:"",
    password:""
   });


    return(
        <>
        <form method="post" onSubmit={}>
            <label htmlFor="">email</label>
            <input type="text" value={email} name="email" onChange={}></input>
            <label>Passoword</label>
            <input type="password" value={pass} name="password" onChange={}></input>
            <button type="submit">submit</button>
        </form>
        </>
    )
}