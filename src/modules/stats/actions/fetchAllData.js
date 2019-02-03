import isEmpty from 'lodash/isEmpty';
import fetchAccount from './fetchAccount';
import fetchProfile from './fetchProfile';
import fetchCharacter from './fetchCharacter';
import fetchStats from './fetchStats';

const fetchAllData = (displayName, membershipType) => async (dispatch, getState) => {
    await dispatch(fetchAccount(displayName, membershipType));
    const statsState = getState().Stats;
    const membershipId = statsState.memberIdByName[displayName.toLowerCase()];
    const profileAction = await dispatch(fetchProfile(membershipType, membershipId));

    if (!isEmpty(profileAction.data) && !isEmpty(profileAction.data.Response) && !isEmpty(profileAction.data.Response.profile)) {
        dispatch(fetchCharacter(membershipType, membershipId, ...profileAction.data.Response.profile.data.characterIds));
    }

    return dispatch(fetchStats(membershipType, membershipId));
};


export default fetchAllData;
