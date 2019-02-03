import assign from 'lodash/assign';
import map from 'lodash/map';
import HttpClient from '../../../lib/httpClient';

const fetchProfile = (state, action) => {
    const data = HttpClient.validateData(action.data);

    if (!data.Valid) {
        return state;
    }

    const newState = assign({}, state);

    newState.profiles[data.Response.profile.data.userInfo.membershipId] = data.Response.profile.data;
    map(data.Response.profile.data.characterIds, (characterId) => {
        newState.characters[characterId] = null;
    });

    return {
        ...newState
    };
};

export default fetchProfile;
