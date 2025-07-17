import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
  Box,
  Checkbox,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import StaffFormModal from './StaffFormModal';
import StaffViewModal from './StaffViewModal';
import StaffEditFormModal from './StaffEditModal';
import PermissionsModal from "./PermissionsModal";
import { createStaff, deleteStaff, getAllStaffs, updateStaff } from '../../redux/slices/staff/staffSlice';
import { createPermission, deletepermission, getAllPermissions, updatepermission } from '../../redux/slices/permission/permissionSlice';
import { getAllStudents } from '../../redux/slices/student/studentSlice';

const StaffTable = () => {
  const dispatch = useDispatch();
  const {staffs} = useSelector((state)=>state.staff);
  const {students} = useSelector((state)=>state.student);
  const {permissions} = useSelector((state)=>state.permission);
  const [staffData, setStaffData] = useState(null);
  const[formOpen,setFormOpen] = useState(false);
  const[editFormOpen,setEditFormOpen] = useState(false);
  const[editPermissionOpen,setEditPermissionOpen] = useState(false);
  const[viewOpen, setViewOpen] = useState(false);
  
  const handleEditstaff = (data) => {
    setStaffData(data)
    setEditFormOpen(true)
  }
  const handleViewstaff = (data) => {
    setStaffData(data)
    setViewOpen(true)
  }
  const handleEditFormSave = (formData) => {
    dispatch(updateStaff(formData))
  }
  const handleCreateStaff = (formData) => {
    dispatch(createStaff(formData))
  }
  const handleDeleteStaff = (staffId) => {
    dispatch(deleteStaff(staffId))
  }
  const handleCreatePermission = (data) => {
    dispatch(createPermission(data))
  }
  const handleUpdatePermission = (data) => {
    dispatch(updatepermission(data))
  }

  const handleDeletePermission = (data) => {
    console.log(data)
    const {_id} = data;
    dispatch(deletepermission(_id))
  }

 useEffect(()=>{
    dispatch(getAllStaffs())
    dispatch(getAllPermissions())
    dispatch(getAllStudents())
 },[])
  
  return (
    <Box>
        <Typography sx={{marginTop:6, fontSize:20, fontWeight:'bold'}}>Staff Details</Typography>
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{mt:4}}>
            <TextField name="text" variant="outlined" label="Search" margin="normal" type="text" size='small' sx={{width:"500px"}} />
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                labelId="status-label"
                label="Status"
                >
                <MenuItem value={10}>Active</MenuItem>
                <MenuItem value={20}>Inactive</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={()=>setEditPermissionOpen(true)} sx={{height:'40px'}} variant="contained" color='secondary'>
             Permissions
            </Button>
            <Button onClick={()=>setFormOpen(true)} sx={{height:'40px'}} variant="contained" color="primary">
            <AddIcon/> Create Staff
            </Button>
        </Box>
         <Box maxHeight={450} sx={{overflowY:'auto', overflowX:'hidden',mt: 4, border:'1px solid rgba(192, 189, 189, 0.5)'}}>
        <TableContainer component={Paper} sx={{margin: 'auto', border:'1px solid rgba(192, 189, 189, 0.5)' }}>
          <Table sx={{ minWidth: 650,  }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Select</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Emial</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffs && staffs.map((staff, index) => (
                <TableRow key={index}>
                  <TableCell><Checkbox></Checkbox></TableCell>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.email}</TableCell>
                  <TableCell> {staff.isActive ? "Active" : "Inactive"} </TableCell>
                  <TableCell sx={{cursor:'pointer'}} onClick={() => handleEditstaff(staff)} >Edit</TableCell>
                  <TableCell sx={{cursor:'pointer'}} onClick={() => handleViewstaff(staff)} >View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
            <StaffFormModal open={formOpen} onClose={() => setFormOpen(false)} onSave={handleCreateStaff} />
            <StaffViewModal open={viewOpen} onClose={() => setViewOpen(false)} staff={staffData} onDelete={handleDeleteStaff}/>
            <StaffEditFormModal open={editFormOpen} onClose={() => setEditFormOpen(false)} staff={staffData} onSave={handleEditFormSave}/>
            <PermissionsModal
              open={editPermissionOpen}
              onClose={() => setEditPermissionOpen(false)}
              permissions={permissions}
              staffOptions={staffs}
              studentOptions={students}
              onSave={handleCreatePermission}
              onUpdate={handleUpdatePermission}
              onDelete={handleDeletePermission}
            />
    </Box>
  )
}

export default StaffTable;
