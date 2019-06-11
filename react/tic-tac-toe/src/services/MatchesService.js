import { wrapService } from 'redux-recompose';
import api from '../config/api';

const getMatches = () => api.get('/matches');

const createMatch = (match) => api.post('/matches', match);

const service = {
  getMatches,
  createMatch
};

export default wrapService(service, 'matches', { getMatches: 'matches' });
