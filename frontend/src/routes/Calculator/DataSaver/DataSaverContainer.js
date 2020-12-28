import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {DataSaver} from './DataSaver';

import {saveData} from 'src/modules/dailyData';

const mapDispatchToProps = (dispatch) => ({
    saveData: (date, calories) => {dispatch(saveData(date, calories));},
    activeDateClickHandler: () => {dispatch(push('calendar'));}
});

const mapStateToProps = (state) => ({
    foodsAnalyzed: state.nutrients.data,
    activeDate: state.dateSelect.activeDate,
    isEdit: state.dateSelect.isEdit
});

const DataSaverContainer = connect(mapStateToProps, mapDispatchToProps)(DataSaver);

export {DataSaverContainer};
