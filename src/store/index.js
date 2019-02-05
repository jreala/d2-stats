import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../modules';
import formatStats from '../lib/middleware/formatStats';
import formatCharacter from '../lib/middleware/formatCharacter';
import formatAccount from '../lib/middleware/formatAccount';
import formatProfile from '../lib/middleware/formatProfile';

let store = null;

export default function init() {
    if (store) {
        return store;
    }

    store = createStore(
        combineReducers(reducers),
        applyMiddleware(
            thunkMiddleware,
            logger,
            formatStats,
            formatCharacter,
            formatAccount,
            formatProfile
        )
    );

    return store;
}
