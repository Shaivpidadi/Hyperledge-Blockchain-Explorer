import axios from 'axios';
const baseURL = 'localhost:3000';

const user = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJuZXR3b3JrIjoiYWtjZXNzLW5ldHdvcmsiLCJpYXQiOjE2MDAyNTMzMjMsImV4cCI6MTYwMDI2MDUyM30.UjtOb6-4dlEvKaQWvOmI8ts_4z58nVt0ulMRJvKsM_M',
  },
});

const fetchNetworkStats = () =>
  user.get(
    '/api/status/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6',
  );

export { fetchNetworkStats };
