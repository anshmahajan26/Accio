import react from "react"
import { useState } from "react"
import axios from "axios"
import Add from "./Component/Add"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Edit from "./Component/Edit";


function App() {
  //this is store input field task and display using map
  //!taken from add.jsx
  const [show, setShow] = useState([]);


  return (
    
    <BrowserRouter>
    <Routes>

     <Route path="/" element={<Add
     show = {show}
     setShow = {setShow}
      />} />

     <Route path = "/Edit" element={<Edit 
     show = {show}
     setShow = {setShow}
     />}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
