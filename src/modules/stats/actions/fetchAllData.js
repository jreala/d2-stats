import isEmpty from 'lodash/isEmpty';
import fetchAccount from './fetchAccount';
import fetchProfile from './fetchProfile';
import fetchCharacter from './fetchCharacter';

const fetchAllData = (displayName, membershipType) => async (dispatch, getState) => {
    await dispatch(fetchAccount(displayName, membershipType));
    const statsState = getState().Stats;
    const membershipId = statsState.memberIdByName[displayName.toLowerCase()];
    const profileAction = await dispatch(fetchProfile(membershipType, membershipId));
    if (!isEmpty(profileAction.data) && !isEmpty(profileAction.data.Response) && !isEmpty(profileAction.data.Response.profile)) {
        const characterAction = dispatch(fetchCharacter(membershipType, membershipId, ...profileAction.data.Response.profile.data.characterIds));
        return characterAction;
    }

    return profileAction;
};


export default fetchAllData;
