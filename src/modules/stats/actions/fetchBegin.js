import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_BEGIN } from '../../../lib/constants';

export const notifyFetchBegin = payload => createAction(ACTION_STATS_FETCH_BEGIN, payload);

const fetchBegin = () => dispatch => dispatch(notifyFetchBegin({ isFetching: true }));

export default fetchBegin;
