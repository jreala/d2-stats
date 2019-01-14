import assign from 'lodash/assign';
import createAction from '../../../store/helpers/createAction';
import { ACTION_SEARCH_PLAYER } from '../../../lib/constants';

const notifySearchAccount = payload => createAction(ACTION_SEARCH_PLAYER, payload);

const searchAccount = searchTerms => (dispatch, getState) => {
    const state = getState();
    return dispatch(
        notifySearchAccount(
            // Probably not state here...
            assign({}, state, { searchTerms })
        )
    );
};

export default searchAccount;
