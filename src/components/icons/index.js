import React from 'react';
import PropTypes from 'prop-types';
import { BATTLE_NET, PLAYSTATION } from '../../lib/constants';
import BattleNet from './battleNet';
import PlayStation from './playstation';

export default class Icon extends React.Component {

    static get propTypes() {
        return {
            name: PropTypes.string.isRequired,
            width: PropTypes.number,
            height: PropTypes.number,
            className: PropTypes.string
        };
    }

    render() {
        const props = {
            width: this.props.width,
            height: this.props.height,
            className: this.props.className
        };

        switch (this.props.name) {
            case BATTLE_NET:
                return <BattleNet {...props} />;
            case PLAYSTATION:
                return <PlayStation {...props} />;
            default:
                return null;
        }
    }

}
