import { Box, Button, Divider, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ConfirmDialogExample from './ConfirmDialogExample';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
        navigate('/login')
    }
    const role = localStorage.getItem('role')

  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}} width={230} p={1} bgcolor='white' zIndex={100} boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)' height='100vh' position='fixed'>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
            <Box 
                component='img'
                src="https://cdn.vectorstock.com/i/1000v/21/54/education-school-logo-design-vector-44972154.jpg"
                alt="Logo"
                sx={{
                width: 50,
                height: 50,
                borderRadius: 2,     
                objectFit: 'cover',
            }}
            />
            <Typography sx={{fontSize:24, fontWeight:'bold'}}>ABC School</Typography>
        </Box>
            <Divider sx={{marginTop:2}}/>
       <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', mt:10, gap:1, height:600, mb:3}}>
         <Box sx={{display:'flex', flexDirection:'column', mt:10, gap:1}}>
            <Button onClick={()=>navigate('/admin/students')} sx={{justifyContent: "flex-start"}}>Students</Button><Divider/>
            {role && role === "admin" && <><Button onClick={()=>navigate('/admin/staffs')} sx={{justifyContent: "flex-start"}}>Staffs</Button><Divider/></>} 
            {/* <Button onClick={()=>navigate('/admin/permission')} sx={{justifyContent: "flex-start"}}>Permissions</Button><Divider/> */}
            <Button sx={{justifyContent: "flex-start"}}>Coming soon</Button><Divider/>
            <Button sx={{justifyContent: "flex-start"}}>Coming soon</Button><Divider/>
        </Box>
        <ConfirmDialogExample 
                open={open}
                title="Log Out"
                message="Are you sure to Log Out?"
                onOk={handleLogOut}
                color={'red'}
                width={220}
            />
       </Box>
    </Box>
  )
}

export default Sidebar
