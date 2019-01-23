import isEmpty from 'lodash/isEmpty';
import assign from 'lodash/assign';
import map from 'lodash/map';
import { SUCCESS } from '../../../lib/constants';

const parseData = (data) => {
    if (isEmpty(data)) {
        return {
            Valid: false,
        };
    }

    if (data.ErrorStatus && data.ErrorStatus !== SUCCESS) {
        return {
            Valid: false,
            ErrorCode: data.ErrorCode,
            ErrorStatus: data.ErrorStatus,
            Message: data.Message
        };
    }

    if (data.Response.length > 0) {
        return {
            Valid: true,
            Response: data.Response
        };
    }

    return assign({}, data, { Valid: false });
};

const fetchProfile = (state, action) => {
    const data = parseData(action.data);
    const newState = assign({}, state);

    if (data.Valid) {
        map(data.Response, (value) => {
            console.log('Value in profile map', value);
            // newState.profiles[value.membershipId] = value;
            // newState.memberIdByName[encodeURIComponent(value.displayName).toLowerCase()] = value.membershipId;
        });
    }

    return {
        ...newState
    };
};

export default fetchProfile;
