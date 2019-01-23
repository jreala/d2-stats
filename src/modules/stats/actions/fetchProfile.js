import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_PROFILE, REQUEST_TYPE_PROFILE } from '../../../lib/constants';
import HttpClient from '../../../lib/httpClient';
import { notifyFetchBegin } from './fetchBegin';
import { notifyFetchDone } from './fetchDone';

export const notifyFetchProfile = payload => createAction(ACTION_STATS_FETCH_PROFILE, payload);

const fetchProfile = (membershipType, membershipId) => async (dispatch) => {

    dispatch(notifyFetchBegin({ isFetching: true, requestType: REQUEST_TYPE_PROFILE }));

    const data = await HttpClient.get(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}?components=Profiles/`);

    dispatch(notifyFetchDone({ isFetching: false, requestType: REQUEST_TYPE_PROFILE }));
    return dispatch(notifyFetchProfile({ data }));
};

export default fetchProfile;
