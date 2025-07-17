import React, { useEffect, useState } from 'react'
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
import StudentFormModal from './StudentForm';
import StudentViewModal from './StudentViewModal';
import StudentEditFormModal from './StudentEditFormModal';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, deletetudent, getAllStudents, updateStudent } from '../../redux/slices/student/studentSlice';

const StudentTable = () => {
  const dispatch = useDispatch();
  const {students} = useSelector((state) => state.student);
  const [studentData, setStudentData] = useState(null);

  const handleViewStudent = (data) => {
    setViewOpen(true)
    setStudentData(data)
  }

  const handleEditStudent = (data) => {
    setEditFormOpen(true)
    setStudentData(data)
  }
  const handleCreateStudent = (studentData) => {
    dispatch(createStudent(studentData))
  }
  const handleUpdateStudent = (studentData) => {
    dispatch(updateStudent(studentData))
  }
  const handleDeleteStudent = (studentId) => {
    dispatch(deletetudent(studentId))
  }

  useEffect(()=>{
    dispatch(getAllStudents())
  },[])

    const[formOpen,setFormOpen] = useState(false);
    const[editFormOpen,setEditFormOpen] = useState(false);
    const[viewOpen, setViewOpen] = useState(false);
      
  return (
    <Box>
        <Typography sx={{marginTop:6, fontSize:20, fontWeight:'bold'}}>Student Details</Typography>
         <Box display='flex' justifyContent='space-between' alignItems='center' sx={{mt:4, position:'relative'}}>
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
            <Button onClick={()=>setFormOpen(true)} sx={{height:'40px'}} variant="contained" color="primary">
            <AddIcon/> Create Student
            </Button>
        </Box>
        <Box maxHeight={450} sx={{overflowY:'auto', overflowX:'hidden',mt: 4, border:'1px solid rgba(192, 189, 189, 0.5)'}}>
        <TableContainer component={Paper} sx={{margin: 'auto', border:'1px solid rgba(192, 189, 189, 0.5)' }}>
          <Table sx={{ minWidth: 650,  }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Select</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Grade</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contact info</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students && students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell><Checkbox></Checkbox></TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.contactInfo}</TableCell>
                  <TableCell>{student.isActive?"Active":"Inactive"}</TableCell>
                  <TableCell sx={{cursor:'pointer'}} onClick={() => handleEditStudent(student)}>Edit</TableCell>
                  <TableCell sx={{cursor:'pointer'}} onClick={() => handleViewStudent(student)}> View </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        <StudentFormModal open={formOpen} onClose={() => setFormOpen(false)} onSave={handleCreateStudent} />
        <StudentViewModal open={viewOpen} onClose={() => setViewOpen(false)} student={studentData} onDelete={handleDeleteStudent}/>
        <StudentEditFormModal open={editFormOpen} onClose={() => setEditFormOpen(false)} student={studentData} onSave={handleUpdateStudent}/>
    </Box>
  )
}

export default StudentTable
