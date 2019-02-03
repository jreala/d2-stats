import assign from 'lodash/assign';
import HttpClient from '../../../lib/httpClient';

const fetchStats = (state, action) => {
    const data = HttpClient.validateData(action.data);

    console.log(data);

    if (!data.Valid) {
        return state;
    }

    const newState = assign({}, state);
    const mergedAllCharacters = data.Response.mergedAllCharacters;
    const [character1, character2, character3] = data.Response.characters;

    newState.accountStats[action.membershipId] = mergedAllCharacters;

    if (character1) {
        newState.characterStats[character1.characterId] = character1;
    }

    if (character2) {
        newState.characterStats[character2.characterId] = character2;
    }

    if (character3) {
        newState.characterStats[character3.characterId] = character3;
    }

    return {
        ...newState
    };
};

export default fetchStats;
