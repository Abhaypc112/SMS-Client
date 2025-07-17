import { Box, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllStaffs } from '../../redux/slices/staff/staffSlice';
import { getAllPermissions } from '../../redux/slices/permission/permissionSlice';
import { getAllStudents } from '../../redux/slices/student/studentSlice';

const AdminTopSection = () => {
  const dispatch = useDispatch();
  const {staffs} = useSelector((state)=>state.staff);
  const {students} = useSelector((state)=>state.student);
  const {permissions} = useSelector((state)=>state.permission);

   useEffect(()=>{
      dispatch(getAllStaffs()) 
      dispatch(getAllPermissions())
      dispatch(getAllStudents()) 
   },[])

  return (
    <Box sx={{flexDirection:{xs:'column', md:'row', gap:10}}} display="flex" justifyContent="space-between">
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:{xs:'90%',md:'30%'}}} borderRadius="5px"  height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'>
          <Typography fontSize={25} fontWeight='bold'>Total Student</Typography>
          <Box sx={{display:'flex', gap:3, alignItems:'center'}}>
            <Box sx={{bgcolor:'#EAEFEE', p:1, borderRadius:3}}><PersonIcon color='primary' fontSize='large'/></Box>
            <Typography fontSize={20} fontWeight='bold'> {students && students.length}</Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:{xs:'90%',md:'30%'}}} borderRadius="5px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'>
          <Typography fontSize={25} fontWeight='bold'>Total Staff</Typography>
          <Box sx={{display:'flex', gap:3, alignItems:'center'}}>
            <Box sx={{bgcolor:'#EAEFEE', p:1, borderRadius:3}}><PersonIcon color='error' fontSize='large'/></Box>
            <Typography fontSize={20} fontWeight='bold'> {staffs && staffs.length}</Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:{xs:'90%',md:'30%'}}} borderRadius="5px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'>
          <Typography fontSize={25} fontWeight='bold'>Total Permissions</Typography>
          <Box sx={{display:'flex', gap:3, alignItems:'center'}}>
            <Box sx={{bgcolor:'#EAEFEE', p:1, borderRadius:3}}><PersonIcon color='warning' fontSize='large'/></Box>
            <Typography fontSize={20} fontWeight='bold'> {permissions && permissions.length}</Typography>
          </Box>
        </Box>

      </Box>
  )
}

export default AdminTopSection
