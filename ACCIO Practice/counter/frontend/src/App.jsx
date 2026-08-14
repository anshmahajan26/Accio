import { useState } from 'react'
import axios from "axios"

function App() {
  const [count,setCount]= useState(0);
  const [ history, setHistory]= useState([]);

  const inc = async ()=>{
   const newCount = count+1;
    setCount(newCount);
   await axios.post("http://localhost:8080/",{
    count: newCount
   });
  };
  const dec = async ()=>{
    const newCount=count-1;
    setCount(newCount);
    await axios.post("http://localhost:8080/",{
      count:newCount
    });
  };

  const getHistory = async()=>{
    const response = await axios.get("http://localhost:8080/history");
    setHistory(response.data);
  }
  return (
    <>
     <h1>{count}</h1>
     <button onClick={inc}>+</button>
     <button onClick={dec}>-</button>
     <h1>history</h1>
     
     <button onClick={getHistory}>getHisotry</button>
     {history.map((item)=>(
      <h3 key={item._id}>{item.count}</h3>
     ))}

    </>
  )
}

export default App
