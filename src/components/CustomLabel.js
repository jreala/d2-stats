import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLabel, VictoryTooltip } from 'victory';

const CustomLabel = props => (
    <g>
        <VictoryLabel {...props} />
        <VictoryTooltip
            {...props}
            style={{ labels: { display: 'block' } }}
            x={200}
            y={250}
            text={`${props.data[props.index].displayName}\n${props.data[props.index].displayValue}`}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            width={100}
            height={100}
            flyoutStyle={{ fill: 'black' }}
        />
    </g>
);

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
CustomLabel.propTypes = {
    data: PropTypes.array,
    index: PropTypes.number
};

export default CustomLabel;
