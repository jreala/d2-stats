import assign from 'lodash/assign';
import { FORMAT_TYPE_ACCOUNT } from '../constants';
import HttpClient from '../httpClient';

// eslint-disable-next-line no-unused-vars
const formatAccount = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_ACCOUNT) {
        return next(action);
    }

    const parsed = HttpClient.validateData(action.data);

    if (!parsed.Valid) {
        return next(action);
    }

    const { data, ...rest } = action;
    const extracted = parsed.Response.shift();
    return next(assign({}, rest, extracted));
};

export default formatAccount;
