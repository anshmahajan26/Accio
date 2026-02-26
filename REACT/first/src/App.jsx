import { useState } from 'react'
import Card from './Component/first';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* props use this is how done */}
      <Card name="Ansh" /> 
      <Card name="Om" />
      
       
         
       
     
      
      
    </>
  )
}

export default App
