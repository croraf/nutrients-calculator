import {connect} from 'react-redux';
/* import moment from 'moment'; */
import CaloriesGraph from './CaloriesGraph';

/* const nutrientsIntakeData = [
    {
        y: 1000,
        x: moment(new Date('2017-08-16')),
        color: 0
    },
    {
        y: 1300,
        x: moment(new Date('2017-08-17')),
        color: 1
    },
    {
        y: 1200,
        x: moment(new Date('2017-08-18')),
        color: 1
    },
    {
        y: 900,
        x: moment(new Date('2017-08-19')),
        color: 1
    }
];  */

const mapDispatchToProps = (dispatch) => ({
    onDataClick: (dataPoint) => {console.log(dataPoint);}
});

const mapStateToProps = (state) => ({
    nutrientsIntakeData:  state.dailyData.sort((a, b) => b.x - a.x) ,
    optimalIntake: state.caloriesTarget
});

const CaloriesGraphContainer = connect(mapStateToProps, mapDispatchToProps)(CaloriesGraph);

export {CaloriesGraphContainer};
