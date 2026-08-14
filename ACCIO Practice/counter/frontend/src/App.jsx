import { useState } from 'react'
import axios from "axios"
function App() {
  const [count,setCount]= useState(0);

  const inc = (async ()=>{
   const newCount = setCount(count+1);

   await axios.post("http://localhost:8080/",{
    count: newCount
   });
  });
  const dec = (()=>{
    setCount(count-1);
  })

  return (
    <>
     <h1>{count}</h1>
     <button onClick={inc}>+</button>
     <button onClick={dec}>-</button>
    </>
  )
}

export default App
