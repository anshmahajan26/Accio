import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Show from "./Show";
function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const setEm = (event) => {
        setEmail(event.target.value);
    }
    const setPasss = (event) => {
        setPass(event.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setUser([
             ...user,{
            email: email,
            password: pass
             
        }]);
        // console.log(user);

       // navigate("/Show");


    }

    return (
        <>
            <form method="post" onSubmit={handlesubmit}>
                <label htmlFor="">email</label>
                <input type="text" value={email} name="email" onChange={setEm}></input>
                <label>Passoword</label>
                <input type="password" value={pass} name="password" onChange={setPasss}></input>

                <button type="submit">submit</button>
            </form>
            {user.map((user, index) => (
                <div key={index}>
                    <h3>Email: {user.email}</h3>
                    <h3>Password: {user.password}</h3>
                    <button>Delete</button>
                </div>
            ))}
        </>
    )
}
export default Login;