import assign from 'lodash/assign';
import reduce from 'lodash/reduce';
import HttpClient from '../../../lib/httpClient';

const fetchCharacter = (state, action) => {
    const data = reduce(action.data, (result, value, key) => {
        result[key] = HttpClient.validateData(value);
        return result;
    }, {});

    const newState = assign({}, state);

    for (const character in data) {
        if (data[character].Valid) {
            const characterId = data[character].Response.character.data.characterId;
            newState.characters[characterId] = data[character].Response;
        }
    }

    return {
        ...newState
    };
};

export default fetchCharacter;
