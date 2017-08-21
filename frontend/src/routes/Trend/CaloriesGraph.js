import React from 'react';
import PropTypes from 'prop-types';

import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, LineMarkSeries } from 'react-vis';

import styles from 'react-vis/dist/style.css';
/* import styles2 from 'react-vis/dist/styles/legends.scss'; */

const nutrientsIntakeData2 = [
    {
        calories: 1000,
        date: '2017-08-16'
    },
    {
        calories: 1300,
        date: '2017-08-17'
    },
    {
        calories: 1200,
        date: '2017-08-18'
    },
    {
        calories: 900,
        date: '2017-08-19'
    }
];


/* const nutrientsIntakeData3 = [
    {
        y: 1500,
        x: new Date('2017-08-16')
    },
    {
        y: 1100,
        x: new Date('2017-08-17')
    },
    {
        y: 1300,
        x: new Date('2017-08-18')
    },
    {
        y: 1900,
        x: new Date('2017-08-19')
    }
]; */

class CaloriesGraph extends React.Component {
    render () {

        const {nutrientsIntakeData, optimalIntake} = this.props;
        console.log(nutrientsIntakeData);
        
        /* const yMin = Math.min(...nutrientsIntakeData.map((item => item.calories))) * 0.5; */
        const yMax = Math.max(...nutrientsIntakeData.map((item => item.y)), optimalIntake) * 1.3;

        /* console.log((new Date('2017-08-21') - new Date('2017-08-15'))/1000/3600/24); */ 

        return (
            <XYPlot height={400} width= {700} style={{padding: 50}} 
                xType='time'
                xDomain={[new Date('2017-08-13'), new Date('2017-08-23')]} 
                yDomain={[0, yMax]} >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title='date' style={{title: {textAnchor: 'end'}}}
                    tickTotal={(new Date('2017-08-23') - new Date('2017-08-13'))/1000/3600/24}
                    tickFormat={v => v.getDate() + '/' + (v.getMonth()+1) + '/' + v.getFullYear()}
                    tickLabelAngle={-45} />
                <YAxis title='calories [kcal]'/>
                <LineSeries data={nutrientsIntakeData} />
                <LineSeries color='lightgray'
                    data={[{x: new Date('2017-08-13'), y: optimalIntake}, {x: new Date('2017-08-23'), y: optimalIntake}]} />
            </XYPlot>
        );
    }
}

export {CaloriesGraph};
