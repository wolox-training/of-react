import api from '../config/api';

export const postUser = (email, password) => api.post('/login', {email, password});
