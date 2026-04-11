//for objects
import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Ansh",
    age: 22
  });

  const updateName = () => {
    setUser({
      ...user,          // keep old data
      name: "Rahul"     // update only this
    });
  };

  return <button onClick={updateName}>{user.name}</button>;
}