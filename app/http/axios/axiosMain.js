import axios from 'axios';

const token = `bearer ${localStorage.getItem('userToken')}`;

const axiosMain = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});
export default axiosMain;
