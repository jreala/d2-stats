import assign from 'lodash/assign';
import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_UPDATE_INPUT } from '../../../lib/constants';

const notifyUpdateInput = payload => createAction(ACTION_STATS_UPDATE_INPUT, payload);

const updateInput = input => dispatch => dispatch(notifyUpdateInput(assign({}, { input })));

export default updateInput;
