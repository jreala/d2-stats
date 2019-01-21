import React from 'react';
import PropTypes from 'prop-types';

export default class StatCard extends React.Component {

    static get propTypes() {
        return {
            displayName: PropTypes.string.isRequired,
            membershipId: PropTypes.string.isRequired,
            membershipType: PropTypes.number.isRequired
        };
    }

    render() {
        return (
            <div>
                Name: {this.props.displayName}
                Id: {this.props.membershipId}
                Type: {this.props.membershipType}
            </div>
        );
    }

}
