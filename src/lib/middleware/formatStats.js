import { FORMAT_TYPE_STATS } from '../constants';

const formatCharacterStats = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_STATS) {
        return next(action);
    }

    return next(action);
};

export default formatCharacterStats;
