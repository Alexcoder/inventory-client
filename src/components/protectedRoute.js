import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../state/context';


const ProtectedRoute = ({children}) => {
    const {user}= useGlobalContext();

  return (
    <div>
        {
            user?.result ? children : <Navigate to="/auth"/>
        }
    </div>
  )
}

export default ProtectedRoute