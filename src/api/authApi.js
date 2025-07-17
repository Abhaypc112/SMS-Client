import axios from 'axios';
const AUTH = 'https://sms-server-xvis.onrender.com/api';

export const loginApi = async(loginData) => {
    const res = await axios.post(`${AUTH}/auth/login`,loginData);
    console.log(res.data.data)
    return res.data.data;
}