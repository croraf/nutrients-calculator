import React from 'react';

import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, LineMarkSeries, } from 'react-vis';
import moment from 'moment';

import Dimensions from 'react-dimensions';

import 'react-vis/dist/style.css';
/* import styles2 from 'react-vis/dist/styles/legends.scss'; */
import './graph-styles.css';

class CaloriesGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: -1
        };
    }

    render() {

        const { nutrientsIntakeData, optimalIntake, onDataClick, containerWidth, containerHeight } = this.props;
        console.log(nutrientsIntakeData);

        /* const yMin = Math.min(...nutrientsIntakeData.map((item => item.calories))) * 0.5; */
        const yMax = Math.max(...nutrientsIntakeData.map((item => item.y)), optimalIntake) * 1.3;
        /* cloning moment with moment() */
        const xMin = moment(moment.min(...nutrientsIntakeData.map((item => item.x)))).subtract(1, 'day');
        const xMax = moment(moment.max(...nutrientsIntakeData.map((item => item.x)))).add(1, 'day');

        let nutrientsIntakeData2 = nutrientsIntakeData.map((point, index) => { index === this.state.index ? point.color = 1 : point.color = 0; point.index = index; return point; }
        );

        console.log(xMax, xMin);
        return (
            <XYPlot height={containerHeight - 30} width={containerWidth - 60} style={{ padding: '0px 30px 30px 30px' }}
                xType='time'
                xDomain={[xMin.toDate(), xMax.toDate()]}
                yDomain={[0, yMax]} >
                <VerticalGridLines style={{ stroke: 'darkgray' }}
                    tickTotal={(xMax.toDate() - xMin.toDate()) / 1000 / 3600 / 24} />
                <HorizontalGridLines style={{ stroke: 'darkgray' }} />
                <XAxis title='date' style={{ title: { textAnchor: 'end' } }}
                    tickTotal={(xMax.toDate() - xMin.toDate()) / 1000 / 3600 / 24}
                    tickFormat={v => v.getDate() + '/' + (v.getMonth() + 1) + '/' + v.getFullYear()}
                    tickLabelAngle={-45} />
                <YAxis title='calories [kcal]' />

                <LineSeries color='purple'
                    data={[{ x: xMin, y: optimalIntake }, { x: xMax, y: optimalIntake }]} />

                <LineMarkSeries data={nutrientsIntakeData2}
                    size={12}
                    colorDomain={[0, 1]}
                    colorRange={['rgb(0, 188, 212)', 'black']}
                    onValueClick={(datapoint, event) => {
                        onDataClick(datapoint);
                    }}
                    onValueMouseOver={(datapoint, event) => {
                        this.setState({ index: datapoint.index });
                    }}
                    onValueMouseOut={(datapoint, event) => {
                        this.setState({ index: -1 });
                    }} />
            </XYPlot>
        );
    }
}


export default Dimensions()(CaloriesGraph);
