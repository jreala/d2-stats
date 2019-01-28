import assign from 'lodash/assign';
import map from 'lodash/map';
import HttpClient from '../../../lib/httpClient';

const fetchAccount = (state, action) => {
    const data = HttpClient.validateData(action.data);
    const newState = assign({}, state);

    if (data.Valid) {
        map(data.Response, (value) => {
            newState.accounts[value.membershipId] = value;
            newState.memberIdByName[encodeURIComponent(value.displayName).toLowerCase()] = value.membershipId;
        });
    }

    return {
        ...newState
    };
};

export default fetchAccount;
