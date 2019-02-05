import { FORMAT_TYPE_ACCOUNT } from '../constants';

const formatAccount = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_ACCOUNT) {
        return next(action);
    }

    return next(action);
};

export default formatAccount;
