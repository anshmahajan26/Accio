import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
    const user = useContext(UserContext)
    return (
        <>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </>
    )
}

export default Profile;
