import fetchAccount from './fetchAccount';
import updateInput from './updateInput';
import fetchBegin from './fetchBegin';
import fetchDone from './fetchDone';
import {
    ACTION_STATS_FETCH_ACCOUNT,
    ACTION_STATS_UPDATE_INPUT,
    ACTION_STATS_FETCH_BEGIN,
    ACTION_STATS_FETCH_DONE
} from '../../../lib/constants';


export default {
    [ACTION_STATS_FETCH_ACCOUNT]: fetchAccount,
    [ACTION_STATS_UPDATE_INPUT]: updateInput,
    [ACTION_STATS_FETCH_BEGIN]: fetchBegin,
    [ACTION_STATS_FETCH_DONE]: fetchDone
};
