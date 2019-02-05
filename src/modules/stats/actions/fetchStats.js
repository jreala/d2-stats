import assign from 'lodash/assign';
import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_STATS, REQUEST_TYPE_STATS, FORMAT_TYPE_STATS } from '../../../lib/constants';
import HttpClient from '../../../lib/httpClient';
import { notifyFetchBegin } from './fetchBegin';
import { notifyFetchDone } from './fetchDone';

export const notifyFetchStats = payload => createAction(ACTION_STATS_FETCH_STATS, assign(payload, { formatType: FORMAT_TYPE_STATS }));

const fetchStats = (membershipType, membershipId) => async (dispatch) => {

    dispatch(notifyFetchBegin({ isFetching: true, requestType: REQUEST_TYPE_STATS }));

    const data = await HttpClient.get(`https://www.bungie.net/platform/Destiny2/${membershipType}/Account/${membershipId}/Stats/`);

    dispatch(notifyFetchDone({ isFetching: false, requestType: REQUEST_TYPE_STATS }));
    return dispatch(notifyFetchStats(assign({}, { data }, { membershipId })));
};

export default fetchStats;
