import React from 'react';
import routes from '../config/routes';
import { Routes, Switchify, Links } from '../lib/routeHelper';

export default class Header extends React.Component {

    __linkStyles() {
        return {
            ul: 'no-format-ul space-around',
            li: 'inline grow',
            a: 'no-text-decoration'
        };
    }

    render() {
        return (
            <>
                <h1>D2 Stats</h1>
                {Links(routes, this.__linkStyles())}
                {Switchify(Routes(routes))}
            </>
        );
    }

}
