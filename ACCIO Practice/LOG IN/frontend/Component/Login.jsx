import { useState } from "react"
function Login(){
    const [email, setEmail]= useState("");
    const [ pass, setPass]= useState("");
   const[user,setUser]= useState({
    email:"",
    password:""
   });
   const setEm=(event)=>{
    setEmail(event.target.value);
   }
   const setPasss=(event)=>{
    setPass(event.target.value);
   }
const handlesubmit=(e)=>{
    e.preventDefault();
    setUser({
        email:email,
        password:pass
    });
    console.log(user);
}

    return(
        <>
        <form method="post" onSubmit={handlesubmit}>
            <label htmlFor="">email</label>
            <input type="text" value={email} name="email" onChange={setEm}></input>
            <label>Passoword</label>
            <input type="password" value={pass} name="password" onChange={setPasss}></input>
            <button type="submit">submit</button>
        </form>
        </>
    )
}
export default Login;