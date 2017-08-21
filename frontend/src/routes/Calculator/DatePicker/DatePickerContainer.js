import {connect} from 'react-redux';

import {MyDatePicker} from './MyDatePicker';

import {saveData} from 'modules/dailyData';

const mapDispatchToProps = (dispatch) => ({
    saveData: (date, calories) => {dispatch(saveData(date, calories));}
});

const mapStateToProps = (state) => ({

});

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(MyDatePicker);

export {DatePickerContainer};
