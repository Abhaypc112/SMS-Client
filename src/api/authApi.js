import axios from 'axios';
const AUTH = 'http://localhost:5000/api';

export const loginApi = async(loginData) => {
    const res = await axios.post(`${AUTH}/auth/login`,loginData);
    console.log(res.data.data)
    return res.data.data;
}