import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthProtuctRouter from './routes/auth/AuthProtuctRouter';
import AdminProtuctRouter from './routes/admin/AdminProtuctRouter';
import AdminRoutes from './routes/admin/AdminRoutes';
import StaffProtuctRouter from './routes/staff/StaffProtuctRouter';
import StaffRoutes from './routes/staff/StaffRoutes';
import Layout from './layout/Layout';
import { AuthPages } from './routes/auth/AuthPages';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthProtuctRouter/>}>
          { AuthPages.length > 0 && AuthPages.map(({path,element},index)=>{
            return <Route key={index} path={path} element={element}/>
          })}
        </Route>
        <Route element={<AdminProtuctRouter/>}>
          { AdminRoutes.length > 0 && AdminRoutes.map(({path,element},index)=>{
            return <Route key={index} path={path} element={<Layout>{element}</Layout>}/>
          })}
        </Route>
        <Route element={<StaffProtuctRouter/>}>
          { StaffRoutes.length > 0 && StaffRoutes.map(({path,element},index)=>{
            return <Route key={index} path={path} element={<Layout>{element}</Layout>}/>
          })}
        </Route>
      </Routes>
    </>
  )
}

export default App
