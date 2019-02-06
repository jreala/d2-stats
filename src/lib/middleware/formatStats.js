import assign from 'lodash/assign';
import { FORMAT_TYPE_STATS } from '../constants';
import HttpClient from '../httpClient';

// eslint-disable-next-line no-unused-vars
const formatCharacterStats = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_STATS) {
        return next(action);
    }

    const data = HttpClient.validateData(action.data);

    if (!data.Valid) {
        return next(action);
    }

    const mydata = assign({}, action, data);

    return next(mydata);
};

export default formatCharacterStats;
