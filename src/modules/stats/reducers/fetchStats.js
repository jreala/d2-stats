import assign from 'lodash/assign';

const fetchStats = (state, action) => {
    const newState = assign({}, state);
    newState.accountStats[action.membershipId] = action.overallStats;
    newState.characterStats = assign(newState.characterStats, action.statsByCharacter);

    return {
        ...newState
    };
};

export default fetchStats;
