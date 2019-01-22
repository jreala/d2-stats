import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_ACCOUNT, REQUEST_TYPE_ACCOUNT } from '../../../lib/constants';
import HttpClient from '../../../lib/httpClient';
import { notifyFetchBegin } from './fetchBegin';
import { notifyFetchDone } from './fetchDone';

export const notifyFetchAccount = payload => createAction(ACTION_STATS_FETCH_ACCOUNT, payload);

const fetchAccount = (accountName, membershipType) => async (dispatch) => {

    dispatch(notifyFetchBegin({ isFetching: true, requestType: REQUEST_TYPE_ACCOUNT }));

    const sanitizedAccount = encodeURIComponent(accountName);
    const data = await HttpClient.get(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${membershipType}/${sanitizedAccount}/`);

    dispatch(notifyFetchDone({ isFetching: false, requestType: REQUEST_TYPE_ACCOUNT }));
    return dispatch(notifyFetchAccount({ isFetching: false, data }));
};

export default fetchAccount;
