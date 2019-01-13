import React from 'react';
import PropTypes from 'prop-types';

export default class StatCard extends React.Component {

    static get propTypes() {
        return {
            onSearch: PropTypes.func
        };
    }

    render() {
        return (
            <p onClick={() => console.log(this.props)}>I am the best around bitches</p>
        );
    }

}
