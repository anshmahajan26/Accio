import { useState, useCallback } from "react";

function useCallbackkk(){
 const [count, setCount] = useState(0);
    const [name, setName] = useState("Ansh");

    const handleClick = useCallback(() => {
        console.log("Function Created");
    }, [count]);
    return(
        <>
          <h2>Count: {count}</h2>
            <h2>Name: {name}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>
        </>
    )
}
export default useCallbackkk;