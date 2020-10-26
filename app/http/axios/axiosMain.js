import axios from 'axios';

// const token = `bearer ${localStorage.getItem('userToken')}`;
const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJuZXR3b3JrIjoiYWtjZXNzLW5ldHdvcmsiLCJpYXQiOjE2MDM3MTE0ODksImV4cCI6MTYwMzcxODY4OX0.B9IN5Ew3tDUXE3wvQCNF95j6TsgPZhyBJu9S58StuIg'

const axiosMain = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});
export default axiosMain;
