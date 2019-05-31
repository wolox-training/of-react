import { create } from 'apisauce';
require('dotenv').config();

const api = create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000
});

export default api;