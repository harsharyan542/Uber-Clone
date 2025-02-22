//person with login cred can access the route inside
import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProtectedWrapper = ({children}) => {
    //const { user } = useContext(UserDataContext)
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            navigate('/UserLogin')
        }
    }, [token])
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
