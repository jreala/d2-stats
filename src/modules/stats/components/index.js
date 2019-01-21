import React from 'react';
import PropTypes from 'prop-types';
import MembershipType from '../../../models/BungieMembershipType';
import Input from '../../../components/input';

export default class Stats extends React.Component {

    static get propTypes() {
        return {
            fetchAccount: PropTypes.func,
            updateInput: PropTypes.func,
            input: PropTypes.string,
            isFetching: PropTypes.bool
        };
    }

    __onChange(e) {
        this.props.updateInput(e.target.value);
    }

    render() {
        return (
            <div>
                <p className='panel-background primary-text-color padding-24' onClick={() => this.props.fetchAccount(this.props.input, MembershipType.TigerBlizzard)}>I am the best around bitches</p>
                {Input({ onChange: this.__onChange.bind(this) })}
                {this.props.isFetching && <p>Loading suckaaa</p>}
            </div>
        );
    }

}
