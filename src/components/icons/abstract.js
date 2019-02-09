import React from 'react';
import PropTypes from 'prop-types';

export default class Abstract extends React.Component {

    static get propTypes() {
        return {
            width: PropTypes.number,
            height: PropTypes.number,
            className: PropTypes.string
        };
    }

    static get defaultProps() {
        return {
            width: 100,
            height: 100,
            className: '',
            fill: '#000000'
        };
    }

}
