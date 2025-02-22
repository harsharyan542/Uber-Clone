import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectedWrapper'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path ="/UserLogin" element={<UserLogin/>} />
        <Route path ="/UserSignup" element={<UserSignup/>} />
        <Route path ="/CaptainSignup" element={<CaptainSignup/>} />
        <Route path ="/CaptainLogin" element={<CaptainLogin/>} />
        <Route path='/Home' element={
          <UserProtectedWrapper> 
              <Home/>
          </UserProtectedWrapper> 
          }/>
        <Route path ="/UserLogout" element={
          <UserProtectedWrapper>
          <UserLogout/>
          </UserProtectedWrapper>} />
        <Route path ="/CaptainHome" element={
          <CaptainProtectWrapper>
          <CaptainHome/>
          </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App
