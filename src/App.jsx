import Login from "./pages/Login.jsx"
import Marks from "./pages/Marks.jsx"
import React from 'react'
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/loginpage' element={<Login />}></Route>
      <Route path='/marks' element={<Marks/>}/>
      </Routes>
    </div>
  )
}

export default App
