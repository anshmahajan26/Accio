import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

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
    const handlesubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/", {
            email: email,
            password: pass
        });
        setUser([
            ...user, {
                email: email,
                password: pass

            }]);
        // console.log(user);

        // navigate("/Show");
    }
    const onDel = async (id) => {
        let DelTask = await axios.delete(`http://localhost:8080/${id}`)
        setUser(user.filter((item, i) => {
            return item._id !== id;
        }));
    }
    useEffect(() => {
        const getTask = async () => {
            const response = await axios.get("http://localhost:8080/");
            setUser(response.data);
        }
        getTask();

    }, [])

    return (
        <>
            <form method="post" onSubmit={handlesubmit}>
                <label htmlFor="">email</label>
                <input type="text" value={email} name="email" onChange={setEm}></input>
                <label>Passoword</label>
                <input type="password" value={pass} name="password" onChange={setPasss}></input>

                <button type="submit">submit</button>
            </form>
            {user.map((item, _id) => (
                <div key={item._id}>
                    <h3>Email: {item.email}</h3>
                    <h3>Password: {item.password}</h3>
                    <button onClick={()=>{onDel(item._id)}}>Delete</button>
                </div>
            ))}
        </>
    )
}
export default Login;