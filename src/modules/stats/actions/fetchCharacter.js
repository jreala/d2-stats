import isNil from 'lodash/isNil';
import assign from 'lodash/assign';
import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_CHARACTER, REQUEST_TYPE_CHARACTER, FORMAT_TYPE_CHARACTER } from '../../../lib/constants';
import HttpClient from '../../../lib/httpClient';
import { notifyFetchBegin } from './fetchBegin';
import { notifyFetchDone } from './fetchDone';

export const notifyFetchCharacter = payload => createAction(ACTION_STATS_FETCH_CHARACTER, assign(payload, { formatType: FORMAT_TYPE_CHARACTER }));

const performRequest = (membershipType, membershipId, characterId) => (
    HttpClient.get(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${characterId}/?components=Characters,CharacterInventories,CharacterProgressions,CharacterActivities,CharacterEquipment`)
);

const fetchCharacter = (membershipType, membershipId, ...[character1, character2, character3]) => async (dispatch) => {

    const requests = {};
    const data = {};

    dispatch(notifyFetchBegin({ isFetching: true, requestType: REQUEST_TYPE_CHARACTER }));

    if (!isNil(character1)) {
        requests.character1 = performRequest(membershipType, membershipId, character1);
    }

    if (!isNil(character2)) {
        requests.character2 = performRequest(membershipType, membershipId, character2);
    }

    if (!isNil(character3)) {
        requests.character3 = performRequest(membershipType, membershipId, character3);
    }

    if (requests.character1) {
        data.character1 = await requests.character1;
    }

    if (requests.character2) {
        data.character2 = await requests.character2;
    }

    if (requests.character3) {
        data.character3 = await requests.character3;
    }

    dispatch(notifyFetchDone({ isFetching: false, requestType: REQUEST_TYPE_CHARACTER }));
    return dispatch(notifyFetchCharacter({ data }));
};



export default fetchCharacter;
