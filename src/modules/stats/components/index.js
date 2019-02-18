import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Input from '../../../components/input';
import Select from '../../../components/select';
import Icon from '../../../components/icons';
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
            fetchProfile: PropTypes.func,
            searchType: PropTypes.number.isRequired,
            updateSearchType: PropTypes.func.isRequired
        };
    }

    __onChange(e) {
        this.props.updateInput(encodeURIComponent(e.target.value));
    }

    __toggleSystemType(value) {
        this.props.updateSearchType(value);
    }

    __typeSelector() {
        return (
            <Select expanded={true} toggleSelected={this.__toggleSystemType.bind(this)}>
                <Icon name='battleNet' data-value={4} />
                <Icon name='playstation' data-value={2} />
                <Icon name='xbox' data-value={1} />
            </Select>
        );
    }

    __createCards(accounts) {
        return map(accounts, data => <StatCard className='panel-background primary-text-color padding-24' key={data.membershipId} displayName={data.displayName} membershipId={data.membershipId} membershipType={data.membershipType} />);
    }

    __wrapChildren(elementType, children = [], props = {}) {
        return React.createElement(elementType, props, ...children);
    }

    render() {
        return (
            <div>
                <p className='panel-background primary-text-color padding-24' onClick={() => this.props.fetchAllData(this.props.input, this.props.searchType)}>I am the best around bitches</p>
                {Input({ onChange: this.__onChange.bind(this) })}
                {this.__typeSelector()}
                {this.props.isFetching && <p>Loading suckaaa</p>}
                {
                    !isEmpty(this.props.accounts) && this.__wrapChildren('div', this.__createCards(this.props.accounts), { className: 'cardContainer' })
                }
            </div>
        );
    }

}
