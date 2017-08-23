import {connect} from 'react-redux';

import {DataSaver} from './DataSaver';

import {saveData} from 'modules/dailyData';

const mapDispatchToProps = (dispatch) => ({
    saveData: (date, calories) => {dispatch(saveData(date, calories));}
});

const mapStateToProps = (state) => ({
    foodsAnalyzed: state.nutrients.foodsAnalyzed
});

const DataSaverContainer = connect(mapStateToProps, mapDispatchToProps)(DataSaver);

export {DataSaverContainer};
