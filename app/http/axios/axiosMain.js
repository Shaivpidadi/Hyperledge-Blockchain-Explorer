import axios from 'axios';

// const token = `bearer ${localStorage.getItem('userToken')}`;
const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJuZXR3b3JrIjoiYWtjZXNzLW5ldHdvcmsiLCJpYXQiOjE2MDM3MzMxNjcsImV4cCI6MTYwMzc0MDM2N30.wImlvybtbRZhvrL-1KItNgTxSqioi6zvkrNm2dnShb8'

const axiosMain = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});
export default axiosMain;
