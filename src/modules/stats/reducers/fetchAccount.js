import isEmpty from 'lodash/isEmpty';
import assign from 'lodash/assign';
import unionWith from 'lodash/unionWith';
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

const accountIsEqual = (account1, account2) => (
    account1.membershipId === account2.membershipId
    && account1.membershipType === account2.membershipType
    && account1.displayName === account2.displayName
);

const fetchAccount = (state, action) => {
    const data = parseData(action.data);
    const newState = assign({}, state);

    if (data.Valid) {
        newState.accounts = unionWith(state.accounts, data.Response, accountIsEqual);
    }

    return {
        ...newState
    };
};

export default fetchAccount;
