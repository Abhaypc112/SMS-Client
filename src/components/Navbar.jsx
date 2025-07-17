import { Box, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'

const Navbar = () => {
  const currentPath = window.location.pathname.split('/');

  return (
    <Box width='100%' zIndex={100} height={35} bgcolor='#2A6047' position='fixed'sx={{ borderRadius:2, marginTop:1, p:2, display:'flex', alignItems:'center', gap:2}}>
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
  )
}

export default Navbar
