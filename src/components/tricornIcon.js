import React from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

export default class TricornIcon extends React.Component {

    static get propTypes() {
        return {
            style: PropTypes.object,
            element: PropTypes.string,
            onClick: PropTypes.func
        };
    }

    render() {
        return (
            <ReactSVG
                src='/assets/tricorn-white.svg'
                svgStyle={this.props.style}
                wrapper={this.props.element}
                onClick={this.props.onClick}
            />
        );
    }

}
