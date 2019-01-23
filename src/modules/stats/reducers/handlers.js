import fetchAccount from './fetchAccount';
import updateInput from './updateInput';
import fetchBegin from './fetchBegin';
import fetchDone from './fetchDone';
import fetchProfile from './fetchProfile';
import {
    ACTION_STATS_FETCH_ACCOUNT,
    ACTION_STATS_UPDATE_INPUT,
    ACTION_STATS_FETCH_BEGIN,
    ACTION_STATS_FETCH_DONE,
    ACTION_STATS_FETCH_PROFILE
} from '../../../lib/constants';


// Assigns a reducer to actions
export default {
    [ACTION_STATS_FETCH_ACCOUNT]: fetchAccount,
    [ACTION_STATS_UPDATE_INPUT]: updateInput,
    [ACTION_STATS_FETCH_BEGIN]: fetchBegin,
    [ACTION_STATS_FETCH_DONE]: fetchDone,
    [ACTION_STATS_FETCH_PROFILE]: fetchProfile
};
