import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Registation from './pages/Registation';
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/registation' element={<Registation/>}/>
        <Route path='/dashboard/:userid' element={<Dashboard/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
