import api from '../config/api';

export const getMatches = () => api.get('/matches');

export const createMatch = (match) => api.post('/matches', match);
