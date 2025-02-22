import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async ()=> {

      const captain = {
       email: email,
       password: password
     };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
      if(response.status === 200){
        const data = response.data;
        console.log(data);
        setUserData(data);
        localStorage.setItem('token', data.token);
        navigate('/CaptainHome');
      }
     console.log("userData",userData);
     setEmail('');
     setPassword('');
   }
 


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <form onSubmit={(e)=> {submitHandler(),e.preventDefault()}}>
        <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
        <input 
        required 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder-text-base' 
        type='email' 
        placeholder='email@example.com'  />
        <h3 className='text-lg font-medium mb-2'>Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder-text-base'
        type='password' 
        placeholder='password'  />
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder-text-base'>Login</button>
      </form>
      <p className='text-center'>Join us!! <Link to='/CaptainSignup' className='text-center text-blue-500'>Register as Captain</Link></p>
      </div>
      <div>
        <Link to='/userLogin' className='bg-[#d5622d] flex item-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder-text-base'> Sign in as user</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
