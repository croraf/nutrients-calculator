
import React from 'react';

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import NavigationArrowBack from '@material-ui/icons/ArrowBack';
import NavigationArrowForward from '@material-ui/icons/ArrowForward';
import Today from '@material-ui/icons/AllOut';

import './my-calendar-styles.css';

import {MyDayBackgroundWrapper} from './MyDayBackgroundWrapper';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

/* let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]); */


class Calendar extends React.Component {
    render () {
        const {editDateHandler, markedDates} = this.props;

        return (
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}} >
                <div style={{width: '90%', maxWidth: 1000, height: 600}}>
                    <BigCalendar
                        events={[]}
                        messages={{
                            previous: <NavigationArrowBack />,
                            next: <NavigationArrowForward />,
                            today: <Today />
                        }}
                        views={['month']}
                        components={{dateCellWrapper: (props) => 
                            <MyDayBackgroundWrapper markedDates={markedDates} editDateHandler={editDateHandler} {...props} />
                        }}
                    />
                </div>
            </div>
        );
    }
}

export {Calendar};

