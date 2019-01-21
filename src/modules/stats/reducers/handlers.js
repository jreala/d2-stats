import search from './search';
import updateInput from './updateInput';
import {
    ACTION_STATS_SEARCH_PLAYER,
    ACTION_STATS_UPDATE_INPUT
} from '../../../lib/constants';


export default {
    [ACTION_STATS_SEARCH_PLAYER]: search,
    [ACTION_STATS_UPDATE_INPUT]: updateInput
};
