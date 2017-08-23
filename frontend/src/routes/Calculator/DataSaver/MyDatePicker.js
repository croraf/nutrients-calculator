import React from 'react';
import PropTypes from 'prop-types';

/* import DatePicker from 'react-datepicker'; */
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './my-date-picker.css';
import DatePicker2 from 'material-ui/DatePicker';

const text_field_style = {
    height: '90%',
    borderRadius: '5px',/* 
    color: white,
    background-color: blue, */
    textAlign: 'center',
    cursor: 'pointer',
    width: '100px',
    borderStyle: 'outset',
};

class MyDatePicker extends React.Component {

    render () {

        return (
            <DatePicker2 
                name='my-date-picker'
                value={this.props.value}
                onChange={this.props.handleChange}
                autoOk={true} className='react-datepicker__input-container' textFieldStyle={text_field_style}/>
        );
    }
}

export {MyDatePicker};
