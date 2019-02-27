import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryTheme, VictoryArea, VictoryPolarAxis } from 'victory';

const radarChart = (props) => {
    console.log('Alright alright alright');

    const data = [
        { weapon: 'ability', kills: 5, displayName: 'Ability', displayValue: '5' },
        { weapon: 'autoRifle', kills: 20, displayName: 'Auto Rifle', displayValue: '20' },
        { weapon: 'bow', kills: 1000, displayName: 'Bow', displayValue: '1000' },
        { weapon: 'fusionRifle', kills: 3, displayName: 'Fusion Rifle', displayValue: '3' },
        { weapon: 'grenade', kills: 210, displayName: 'Grenade', displayValue: '210' },
        { weapon: 'handCannon', kills: 300, displayName: 'Hand Cannon', displayValue: '300' },
        { weapon: 'melee', kills: 2, displayName: 'Melee', displayValue: '2' }
    ];

    return (
        <VictoryChart
            polar
            theme={VictoryTheme.material}
            padding={{ left: 90, right: 90 }}
        >
            <VictoryPolarAxis />
            <VictoryArea data={data} x='weapon'
                y='kills'
                padding='20' />
        </VictoryChart>
    );
};

// radarChart.propTypes = {
//     data: PropTypes.object.isRequired
// };

export default radarChart;
