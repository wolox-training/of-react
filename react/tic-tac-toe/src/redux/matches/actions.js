import { getMatches, createMatch } from '../../services/MatchesService';

export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  GET_MATCHES_SUCCESS: '@@MATCHES/GET_MATCHES_SUCCESS',
  GET_MATCHES_FAILURE: '@@MATCHES/GET_MATCHES_FAILURE',
  CREATE_MATCH: '@@MATCHES/CREATE_MATCH',
  CREATE_MATCH_SUCCESS: '@@MATCHES/CREATE_MATCH_SUCCESS',
  CREATE_MATCH_FAILURE: '@@MATCHES/CREATE_MATCH_FAILURE'
};

const actionsCreators = {
  getMatches: () => (async dispatch => {
    const response = await getMatches();
    if (response.ok) dispatch(actionsCreators.getMatchesSuccess(response.data));
    else dispatch(actionsCreators.getMatchesFailure(response.problem));
  }),
  getMatchesSuccess: (matches) => ({
    type: actions.GET_MATCHES_SUCCESS,
    payload: matches
  }),
  getMatchesFailure: (problem) => ({
    type: actions.GET_MATCHES_FAILURE,
    payload: problem
  }),
  createMatch: (match) => (async dispatch => {
    const response = await createMatch(match);
    if (response.ok) dispatch(actionsCreators.createMatchSuccess(response.data));
    else dispatch(actionsCreators.createMatchFailure(response.problem));
  }),
  createMatchSuccess: (data) => ({
    type: actions.CREATE_MATCH_SUCCESS,
    payload: data
  }),
  createMatchFailure: (problem) => ({
    type: actions.CREATE_MATCH_FAILURE,
    payload: problem
  }),
};

export default actionsCreators;