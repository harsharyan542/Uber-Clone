import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext, { UserDataContext } from '../context/UserContext'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1737083053903-b7c9a38fc496?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen pt-8 w-full flex justify-between flex-col'>
        <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'></img>
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started Uber</h2>
          <Link to='/UserLogin' className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
