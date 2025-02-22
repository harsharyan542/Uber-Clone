import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response);
        localStorage.removeItem('token');
        navigate('/UserLogin');
    }).catch((error) => {
        console.log(error);
    }
    )
    

  return (
    <div>
      
    </div>
  )
}

export default UserLogout
