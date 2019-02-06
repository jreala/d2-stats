import assign from 'lodash/assign';
import reduce from 'lodash/reduce';
import { FORMAT_TYPE_CHARACTER } from '../constants';
import HttpClient from '../httpClient';

// eslint-disable-next-line no-unused-vars
const formatCharacter = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_CHARACTER) {
        return next(action);
    }

    const { data, ...rest } = action;
    const characterIds = {};
    const parsed = reduce(action.data, (result, value, key) => {
        result[key] = HttpClient.validateData(value);
        return result;
    }, {});

    for (const char in parsed) {
        if (!parsed[char].Valid) {
            continue;
        }

        const characterId = parsed[char].Response.character.data.characterId;
        characterIds[characterId] = parsed[char].Response;
    }

    return next(assign({}, rest, { data: characterIds }));
};

export default formatCharacter;
