import assign from 'lodash/assign';
import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_DATA } from '../../../lib/constants';

const notifyFetchData = payload => createAction(ACTION_STATS_FETCH_DATA, payload);

const fetchData = dataType => (dispatch, getState) => {
    const state = getState();
    const payload = {
        isFetching: true,
        fetchType: dataType
    };

    return dispatch(notifyFetchData(assign({}, state, payload)));
};

export default fetchData;
