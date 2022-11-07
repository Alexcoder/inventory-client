import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../state/context';


export const ProtectedRoute = ({children}) => {
  const {user}= useGlobalContext();
  if(user) return children;
  else return <Navigate to="/auth"/>
}

export const AdminRoute = ({children}) => {
  const {user}= useGlobalContext();
  if(user?.isAdmin) return children;
  else return <Navigate to="/auth"/>
}

export const LoginRoute = ({children}) => {
  const {user}= useGlobalContext();
    if(!user) return children;
    else return <Navigate to="/"/>
}

