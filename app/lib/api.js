import axios from 'axios';
const baseURL = 'http://localhost:3000';

// This is temporary
const user = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJuZXR3b3JrIjoiYWtjZXNzLW5ldHdvcmsiLCJpYXQiOjE2MDA0MzU0NzYsImV4cCI6MTYwMDQ0MjY3Nn0.6gaZBYxdzYU6sLWaX2U4WVL2zeHarATOLjP9j9fYwWA',
  },
});

const fetchNetworkStats = () =>
  user.get(
    '/api/status/a68f5ce2234e9d53510f652036f37d34dbef692a696c8295b5d8d7435887b0b6',
  );

export { fetchNetworkStats };
