import assign from 'lodash/assign';

/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {object} payload
 * @property {boolean} error
 */

/**
 * Create action with given parameters
 * @param {string} type
 * @param {object} payload
 * @param {boolean} error
 * @returns {Action} Generated Action
 */
const createAction = (type, payload, error = false) => assign({}, { type }, payload || {}, { error });

export default createAction;
