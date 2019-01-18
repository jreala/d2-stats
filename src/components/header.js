import React from 'react';
import routes from '../config/routes';
import { Links } from '../lib/routeHelper';

export default class Header extends React.Component {

    __linkStyles() {
        return {
            ul: 'no-margin no-padding no-list-style grow space-around',
            li: 'grow',
            a: 'no-text-decoration center-justify center-horizontal secondary-text-color'
        };
    }

    render() {
        return (
            <div className='header inline-flex full-width padding-left-8 padding-right-8'>
                <h1 className='no-padding no-margin grow max-width-136 primary-text-color'>D2 Stats</h1>
                {Links(routes, this.__linkStyles())}
            </div>
        );
    }

}
