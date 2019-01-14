import React from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { Route, Link, Switch } from 'react-router-dom';

/**
 * Build Routes from Object[]
 * @param {Object[]} data
 * @param {string} data[].displayName
 * @param {string} data[].path
 * @param {string} data[].component
 * @param {boolean} data[].exact
 * @returns {Route[]}
 */
export const Routes = data => map(data, route => (
    <Route key={route.component}
        exact={!!route.exact}
        path={route.path}
        component={route.component}
    />
));

/**
 * Build Links from Object[]
 * @param {Object[]} data
 * @param {string} data[].displayName
 * @param {string} data[].path
 * @param {Object} styles
 * @param {string} styles.ul
 * @param {string} styles.li
 * @param {string} styles.a
 * @returns {Link[]} - Unordered list of Links
 */
export const Links = (data, styles) => (
    <ul className={styles.ul || ''}>
        {map(filter(data, route => !route.hidden), route => (
            <li key={route.displayName} className={styles.li || ''}>
                <Link className={styles.a || ''} to={route.path}>{route.displayName}</Link>
            </li>
        ))}
    </ul>
);

/**
 * Wrap routes inside a Switch
 * @param {Route[]} routes
 * @returns {Switch}
 */
export const Switchify = routes => (
    <Switch>
        {routes}
    </Switch>
);
