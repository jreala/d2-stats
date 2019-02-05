import { FORMAT_TYPE_PROFILE } from '../constants';

const formatProfile = store => next => (action) => {

    if (action.formatType !== FORMAT_TYPE_PROFILE) {
        return next(action);
    }

    return next(action);
};

export default formatProfile;
