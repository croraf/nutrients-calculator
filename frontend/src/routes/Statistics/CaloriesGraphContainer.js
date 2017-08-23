import {connect} from 'react-redux';

import {CaloriesGraph} from './CaloriesGraph';

/* const nutrientsIntakeData = [
    {
        y: 1000,
        x: new Date('2017-08-16')
    },
    {
        y: 1300,
        x: new Date('2017-08-17')
    },
    {
        y: 1200,
        x: new Date('2017-08-18')
    },
    {
        y: 900,
        x: new Date('2017-08-19')
    }
]; */

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    nutrientsIntakeData: state.dailyData.sort((a, b) => b.x - a.x),
    optimalIntake: 1600
});

const CaloriesGraphContainer = connect(mapStateToProps, mapDispatchToProps)(CaloriesGraph);

export {CaloriesGraphContainer};
