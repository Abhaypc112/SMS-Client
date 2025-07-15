import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const StaffProtuctRouter = () => {
  const isAuthenticated  = localStorage.getItem("role")==='staff';
  return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}

export default StaffProtuctRouter
