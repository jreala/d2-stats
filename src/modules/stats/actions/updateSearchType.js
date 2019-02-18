import assign from 'lodash/assign';
import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_UPDATE_SEARCH_TYPE } from '../../../lib/constants';

export const notifyUpdateSearchType = payload => createAction(ACTION_STATS_UPDATE_SEARCH_TYPE, payload);

const updateSearchType = searchType => dispatch => dispatch(notifyUpdateSearchType(assign({}, { searchType })));

export default updateSearchType;
