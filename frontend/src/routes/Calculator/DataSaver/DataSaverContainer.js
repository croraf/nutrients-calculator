import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {DataSaver} from './DataSaver';

import {saveData} from 'modules/dailyData';

const mapDispatchToProps = (dispatch) => ({
    saveData: (date, calories) => {dispatch(saveData(date, calories));},
    activeDateClickHandler: () => {dispatch(push('calendar'));}
});

const mapStateToProps = (state) => ({
    foodsAnalyzed: state.nutrients.foodsAnalyzed,
    activeDate: state.dateSelect.activeDate
});

const DataSaverContainer = connect(mapStateToProps, mapDispatchToProps)(DataSaver);

export {DataSaverContainer};
