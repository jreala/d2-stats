import React from 'react';
import PropTypes from 'prop-types';

export default class StatCard extends React.Component {

    static get propTypes() {
        return {
            search: PropTypes.func
        };
    }

    render() {
        return (
            <p onClick={() => this.props.search('terms of searching')}>I am the best around bitches</p>
        );
    }

}
