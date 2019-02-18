import createReducer from '../../../store/helpers/createReducer';
import handlers from './handlers';

export default createReducer({
    accounts: {},
    profiles: {},
    characters: {},
    memberIdByName: {},
    accountStats: {},
    characterStats: {},
    searchType: 4
}, handlers);
