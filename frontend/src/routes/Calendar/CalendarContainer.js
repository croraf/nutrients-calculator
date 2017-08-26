
import {connect} from 'react-redux';

import {Calendar} from './Calendar';

import {dateSelect} from 'modules/dateSelect';

const markedDates = [
    new Date('2017-08-05'),
    new Date('2017-08-15')
];

const mapDispatchToProps = (dispatch) => ({
    dateSelectHandler: (date) => {dispatch(dateSelect(date));}
});

const mapStateToProps = (state) => ({
    markedDates
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export {CalendarContainer};
