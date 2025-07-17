import axios from 'axios';
const AUTH = 'https://sms-server-33i2.onrender.com/api';

export const loginApi = async(loginData) => {
    const res = await axios.post(`${AUTH}/auth/login`,loginData);
    console.log(res.data.data)
    return res.data.data;
}