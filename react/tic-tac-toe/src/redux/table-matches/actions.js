import { getMatches } from '../../services/MatchesService';

export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  LOAD_MATCHES: '@@MATCHES/LOAD_MATCHES'
};

const actionsCreators = {
  getMatches: () => (async (dispatch) => {
    let matches = await getMatches();
    return dispatch(actionsCreators.loadMatches(matches.data ? matches.data : []));
  }),
  loadMatches: (matches) => ({
    type: actions.LOAD_MATCHES,
    payload: matches
  }),
};

export default actionsCreators;