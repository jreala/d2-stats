import React from 'react';
import map from 'lodash/map';
import { Route, Link, Switch } from 'react-router-dom';

const IndexPage = () => <p>Index</p>;
const AboutPage = () => <p>About</p>;
const TokenPage = () => {
    localStorage.setItem('d2-stats-auth', 'peanutbutter');
    window.close();
    return (
        <p>If the page does not close automatically, you may do so now</p>
    );
};

const Registry = {
    IndexPage,
    AboutPage,
    TokenPage
};

/**
 * Build Routes from Object[]
 * @param {Object[]} data
 * @param {string} data[].displayName
 * @param {string} data[].path
 * @param {string} data[].component
 * @param {boolean} data[].exact
 */
export const Routes = data => map(data, route => (
    <Route key={route.component}
        exact={!!route.exact}
        path={route.path}
        component={Registry[route.component]}
    />
));

/**
 * Build Links from Object[]
 * @param {Object[]} data
 * @param {string} data[].displayName
 * @param {string} data[].path
 */
export const Links = data => (
    <ul>
        {map(data, route => (
            <li>
                <Link to={route.path}>{route.displayName}</Link>
            </li>
        ))}
    </ul>
);

/**
 * Wrap routes inside a Switch
 * @param {Route[]} routes
 */
export const Switchify = routes => (
    <Switch>
        {routes}
    </Switch>
);
