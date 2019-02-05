import { FORMAT_TYPE_CHARACTER } from '../constants';

const formatCharacterStats = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_CHARACTER) {
        return next(action);
    }

    return next(action);
};

export default formatCharacterStats;
