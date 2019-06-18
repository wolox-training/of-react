import { getMatches } from '../../services/MatchesService';

export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  GET_MATCHES_SUCCESS: '@@MATCHES/GET_MATCHES_SUCCESS',
  GET_MATCHES_FAILURE: '@@MATCHES/GET_MATCHES_FAILURE'
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
  })
};

export default actionsCreators;
