import react from "react"
import { useState } from "react"
import axios from "axios"
import Add from "./Component/Add"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Edit from "./Component/Edit";


function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>

     <Route path="/" element={<Add />} />
     <Route path = "/Edit" element={<Edit />}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
