import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/UserLogin" element={<UserLogin/>} />
        <Route path ="/UserSignup" element={<UserSignup/>} />
        <Route path ="/CaptainSignup" element={<CaptainSignup/>} />
        <Route path ="/CaptainLogin" element={<CaptainLogin/>} />
      </Routes>
    </div>
  )
}

export default App
