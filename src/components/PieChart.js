import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory';
import CustomLabel from './CustomLabel';

const pieChart = (props) => {
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
        <VictoryPie
            x='weapon'
            y='kills'
            data={data}
            padAngle={1}
            innerRadius={100}
            style={{ labels: { display: 'none' } }}
            labelComponent={<CustomLabel />}
        >

        </VictoryPie>
    );
};

// pieChart.propTypes = {
//     data: PropTypes.object.isRequired
// };

export default pieChart;
