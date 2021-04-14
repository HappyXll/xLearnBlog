import axios from 'axios';
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: 'http://127.0.0.1:3000',
})
export default api;