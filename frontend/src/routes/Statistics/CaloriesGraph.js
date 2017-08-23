import React from 'react';
import PropTypes from 'prop-types';

import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, LineMarkSeries } from 'react-vis';
import moment from 'moment';

import styles from 'react-vis/dist/style.css';
/* import styles2 from 'react-vis/dist/styles/legends.scss'; */

class CaloriesGraph extends React.Component {
    render () {

        const {nutrientsIntakeData, optimalIntake} = this.props;
        console.log(nutrientsIntakeData);
        
        /* const yMin = Math.min(...nutrientsIntakeData.map((item => item.calories))) * 0.5; */
        const yMax = Math.max(...nutrientsIntakeData.map((item => item.y)), optimalIntake) * 1.3;
        /* cloning moment with moment() */
        const xMin = moment(moment.min(...nutrientsIntakeData.map((item => item.x)))).subtract(1, 'day');
        const xMax = moment(moment.max(...nutrientsIntakeData.map((item => item.x)))).add(1, 'day');

        console.log(xMax, xMin);
        return (
            <XYPlot height={400} width= {700} style={{padding: 50}} 
                xType='time'
                xDomain={[xMin.toDate() , xMax.toDate()]} 
                yDomain={[0, yMax]} >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title='date' style={{title: {textAnchor: 'end'}}}
                    tickTotal={(xMax.toDate() - xMin.toDate())/1000/3600/24}
                    tickFormat={v => v.getDate() + '/' + (v.getMonth()+1) + '/' + v.getFullYear()}
                    tickLabelAngle={-45} />
                <YAxis title='calories [kcal]'/>
                
                <LineSeries color='lightgray'
                    data={[{x:xMin, y: optimalIntake}, {x: xMax, y: optimalIntake}]} />
                
                <LineMarkSeries data={nutrientsIntakeData} />
            </XYPlot>
        );
    }
}

export {CaloriesGraph};