import React, {useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { LoginVlidation } from '../validation/loginValidation';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Layout from '../layout/Layout';

const LoginPage = () => {
    const [formData, setFormData] = useState({email:"", password : ""});
     const [loginError,setLoginError] = useState({email:"",password:""});
    const dispatch = useDispatch();
     const {error, loading} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleOnSubmit = async() => {
      const validateError = LoginVlidation(formData);
      setLoginError(validateError)
      if(Object.values(validateError).every((error) => error === '')){
        dispatch(userLogin(formData));
      }
    }

    useEffect(()=>{
      if(role === "admin") navigate('/admin/dashboard');
      if(role === "staff") navigate('/staff/dashboard');
    },[role])

  return (
    <Box>
      <Box sty width="100%" height="100vh" display='flex' justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column" width={300}>
        <Typography  fontSize='10px' color='red'>{error}</Typography>
        <Typography fontSize='10px' color='red'>{loginError.email}</Typography>
        <TextField onChange={handleOnChange} label="Email" name="email" variant="outlined" margin="normal" />
        <Typography fontSize='10px' color='red'>{loginError.password}</Typography>
        <TextField onChange={handleOnChange} label="Password" name="password" variant="outlined" margin="normal" type="password" />
          <Button onClick={handleOnSubmit} variant="contained" color="primary">
            Login
          </Button>
      </Box>
    </Box>
    </Box>
  )
}

export default LoginPage
