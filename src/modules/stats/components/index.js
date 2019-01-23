import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import MembershipType from '../../../models/BungieMembershipType';
import Input from '../../../components/input';
import StatCard from './StatCard';

export default class Stats extends React.Component {

    static get propTypes() {
        return {
            accounts: PropTypes.object.isRequired,
            fetchAccount: PropTypes.func,
            updateInput: PropTypes.func,
            input: PropTypes.string,
            isFetching: PropTypes.bool,
            fetchAllData: PropTypes.func,
            fetchProfile: PropTypes.func
        };
    }

    __onChange(e) {
        this.props.updateInput(e.target.value);
    }

    __createCards(accounts) {
        return map(accounts, data => <StatCard key={data.membershipId} displayName={data.displayName} membershipId={data.membershipId} membershipType={data.membershipType} />);
    }

    __wrapChildren(elementType, children = [], props = {}) {
        return React.createElement(elementType, props, ...children);
    }

    render() {
        return (
            <div>
                <p className='panel-background primary-text-color padding-24' onClick={() => this.props.fetchProfile(this.props.input, MembershipType.TigerBlizzard)}>I am the best around bitches</p>
                {Input({ onChange: this.__onChange.bind(this) })}
                {this.props.isFetching && <p>Loading suckaaa</p>}
                {
                    this.props.accounts.length > 0 && this.__wrapChildren('div', this.__createCards(this.props.accounts), { className: 'cardContainer' })}
            </div>
        );
    }

}
