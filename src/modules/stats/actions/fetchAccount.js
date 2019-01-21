import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_SEARCH_PLAYER } from '../../../lib/constants';
import HttpClient from '../../../lib/httpClient';


const notifyFetchAccount = payload => createAction(ACTION_STATS_SEARCH_PLAYER, payload);

const fetchAccount = (accountName, membershipType) => async (dispatch) => {

    dispatch(notifyFetchAccount({ isFetching: true, data: {} }));

    const sanitizedAccount = encodeURIComponent(accountName);
    const data = await HttpClient.get(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${membershipType}/${sanitizedAccount}/`);
    return dispatch(notifyFetchAccount({ isFetching: false, data }));
};

export default fetchAccount;
