import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtuctRouter = () => {
  const isAuthenticated  = localStorage.getItem("role")==='admin';
  return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}

export default AdminProtuctRouter;
