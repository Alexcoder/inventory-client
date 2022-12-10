import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../state/context';


export const ProtectedRoute = ({children}) => {
  const {user}= useGlobalContext();
  if(user) return children;
<<<<<<< HEAD
  else return <Navigate to="/auth"/>
=======
  else return <Navigate to="/welcome"/>
>>>>>>> 177e499 (refactor login)
}

export const AdminRoute = ({children}) => {
  const {user}= useGlobalContext();
  if(user?.isAdmin) return children;
<<<<<<< HEAD
  else return <Navigate to="/auth"/>
=======
  else return <Navigate to="/welcome"/>
>>>>>>> 177e499 (refactor login)
}

export const LoginRoute = ({children}) => {
  const {user}= useGlobalContext();
    if(!user) return children;
    else return <Navigate to="/"/>
}

