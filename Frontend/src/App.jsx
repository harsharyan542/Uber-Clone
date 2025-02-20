import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path ="/UserLogin" element={<UserLogin/>} />
        <Route path ="/UserSignup" element={<UserSignup/>} />
        <Route path ="/CaptainSignup" element={<CaptainSignup/>} />
        <Route path ="/CaptainLogin" element={<CaptainLogin/>} />
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
