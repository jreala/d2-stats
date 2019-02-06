import assign from 'lodash/assign';
import pick from 'lodash/pick';

const fetchAccount = (state, action) => {
    const newState = assign({}, state);
    const accountData = pick(action, ['displayName', 'membershipId', 'membershipType']);

    newState.accounts[action.membershipId] = accountData;
    newState.memberIdByName[encodeURIComponent(action.displayName).toLowerCase()] = action.membershipId;

    return {
        ...newState
    };
};

export default fetchAccount;
