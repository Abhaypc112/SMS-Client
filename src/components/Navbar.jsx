import { Box, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'

const Navbar = () => {
  const currentPath = window.location.pathname.split('/');
  const userName = localStorage.getItem('userName');

  return (
    <Box zIndex={100} height={35} bgcolor='#2A6047' position='fixed'sx={{ width:{md:'80%',xs:'85%'}, borderRadius:2, marginTop:1, p:2, display:'flex', justifyContent:'space-between', alignItems:'center', gap:2}}>
       <Box sx={{display:'flex'}}>
         {
          currentPath.map((path,index)=>{
            return(
              <Box key={index} sx={{display:'flex'}}>
                <Typography sx={{color:'white'}}>{path}</Typography>
                <ChevronRightIcon  sx={{color:'white'}}/>
              </Box>
            )
          })
        }
       </Box>
        <Typography sx={{color:'white', mr:5}}>{userName}</Typography>
    </Box>
  )
}

export default Navbar
