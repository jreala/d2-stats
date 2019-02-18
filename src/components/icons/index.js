import React from 'react';
import PropTypes from 'prop-types';
import { Icons } from '../../lib/constants';
import * as Symbol from './symbols';

export default class Icon extends React.Component {

    static get propTypes() {
        return {
            name: PropTypes.string.isRequired,
            width: PropTypes.number,
            height: PropTypes.number,
            className: PropTypes.string,
            onClick: PropTypes.func
        };
    }

    render() {
        const props = {
            width: this.props.width,
            height: this.props.height,
            className: this.props.className,
            onClick: this.props.onClick
        };

        switch (this.props.name) {
            case Icons.BattleNet:
                return <Symbol.BattleNet {...props} />;
            case Icons.Playstation:
                return <Symbol.Playstation {...props} />;
            case Icons.Xbox:
                return <Symbol.Xbox {...props} />;
            default:
                return null;
        }
    }

}
