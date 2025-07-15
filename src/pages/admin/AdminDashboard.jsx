import { Box, Button, Checkbox, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';

const AdminDashboard = () => {
   const rows = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Alice', age: 30, city: 'London' },
    { name: 'Bob', age: 28, city: 'Tokyo' },
    { name: 'Sara', age: 35, city: 'Sydney' },
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Alice', age: 30, city: 'London' },
    { name: 'Bob', age: 28, city: 'Tokyo' },
    { name: 'Sara', age: 35, city: 'Sydney' },
  ];
  return (
    <Box paddingX="30px" marginTop="10px">
      <Box display="flex" justifyContent="space-between">
        <Box borderRadius="5px" width="250px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'></Box>
        <Box borderRadius="5px" width="250px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'></Box>
        <Box borderRadius="5px" width="250px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'></Box>
        <Box borderRadius="5px" width="250px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'></Box>
        <Box borderRadius="5px" width="250px" height="125px" bgcolor="white" boxShadow = '0px 4px 12px rgba(208, 205, 205, 0.5)' border= '1px solid rgba(192, 189, 189, 0.5)'></Box>
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center' sx={{mt:4}}>
        <TextField name="text" variant="outlined" margin="normal" type="text" size='small' sx={{width:"500px"}} />
        <Button sx={{height:'40px'}} variant="contained" color="primary">
         <AddIcon/> Add Student
        </Button>
      </Box>
      <Box maxHeight={450} sx={{overflowY:'auto', overflowX:'hidden',mt: 4}}>
        <TableContainer component={Paper} sx={{margin: 'auto', border:'1px solid rgba(192, 189, 189, 0.5)' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Select</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Grade</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contact info</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell><Checkbox></Checkbox></TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell> A+ </TableCell>
                  <TableCell> +91 8976874477 </TableCell>
                  <TableCell> Active </TableCell>
                  <TableCell>View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default AdminDashboard
