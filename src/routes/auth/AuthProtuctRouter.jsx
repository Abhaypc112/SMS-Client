import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthProtuctRouter = () => {
  const isAdmin = localStorage.getItem("role")==='admin';
  const isStaff = localStorage.getItem("role")==='staff';
  return isAdmin? <Navigate to="/admin/dashboard"/> : 
  isStaff? <Navigate to="/staff/dashboard"/>:
  <Outlet/>
}

export default AuthProtuctRouter;
