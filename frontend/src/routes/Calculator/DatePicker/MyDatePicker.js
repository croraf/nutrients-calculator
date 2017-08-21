import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';

import 'react-datepicker/dist/react-datepicker.css';
import './my-date-picker.css';

class MyDatePicker extends React.Component {

    constructor (props) {
        super(props);
        /* moment.locale('de'); */
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render () {
        return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        withPortal={true} /> 
                <RaisedButton label='Save' primary={true} type='button' onTouchTap={() => {alert('Your food intake for this day is saved!');}}/>
            </div>
        );
    }
}

export {MyDatePicker};
