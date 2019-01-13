import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../modules';

let store = null;

export default function init() {
    if (store) {
        return store;
    }

    store = createStore(
        combineReducers(reducers),
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    );

    return store;
}
