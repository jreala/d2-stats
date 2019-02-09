import assign from 'lodash/assign';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import StatId from '../statId';
import { FORMAT_TYPE_STATS } from '../constants';
import HttpClient from '../httpClient';

const extract = collection => reduce(collection, (result, value, key) => {
    if (StatId.includes(key)) {
        result[key] = value;
    }
    return result;
}, {});

// eslint-disable-next-line no-unused-vars
const formatCharacterStats = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_STATS) {
        return next(action);
    }

    const parsed = HttpClient.validateData(action.data);

    if (!parsed.Valid) {
        return next(action);
    }

    const { data, ...rest } = action;
    const statsByCharacter = {};
    const overallStats = {
        pvp: extract(parsed.Response.mergedAllCharacters.results.allPvP.allTime),
        pve: extract(parsed.Response.mergedAllCharacters.results.allPvE.allTime),
        merged: extract(parsed.Response.mergedAllCharacters.merged.allTime)
    };

    map(parsed.Response.characters, (character) => {
        const pvp = extract(character.results.allPvP.allTime);
        const pve = extract(character.results.allPvE.allTime);
        const merged = extract(character.merged.allTime);

        statsByCharacter[character.characterId] = { pvp, pve, merged };
    });

    return next(assign({}, rest, { statsByCharacter }, { overallStats }));
};

export default formatCharacterStats;
