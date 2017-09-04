
import {connect} from 'react-redux';

import {push} from 'react-router-redux';

import {Calendar} from './Calendar';

import {dateSelect} from 'modules/dateSelect';

const markedDates = [
    new Date('2017-08-05'),
    new Date('2017-08-15')
];

const mapDispatchToProps = (dispatch) => ({
    editDateHandler: (date, isEdit) => {dispatch(dateSelect(date, isEdit)); dispatch(push('calculator'));}
});

const mapStateToProps = (state) => ({
    markedDates: [...markedDates, ...state.dailyData.map((dailyData) => dailyData.x.toDate())]
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
