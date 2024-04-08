import axios from 'axios';

// const baseURL = 'http://127.0.0.1:8000/';
const baseURL = 'https://devv.pythonanywhere.com/'
// const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL,
  headers: {
    // Authorization: token ? `Bearer ${token}` : null,
  },
});

export default axiosInstance;
