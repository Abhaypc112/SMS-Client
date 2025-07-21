import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material';

const Layout = ({ children }) => {

  return (
    <Box className="layout" display='flex' width='100%'>
       <Sidebar />
      <Box className="content-wrapper" width='100%' sx={{marginLeft:{sx:0, md:30}}} px={3}>
      <Navbar />
        <Box className="content" sx={{overflowX:'hidden'}}  marginTop={12}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;