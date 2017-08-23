import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';

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

    constructor (props) {
        super(props);
        /* moment.locale('de'); */
        this.state = {
            date: moment().startOf('day').toDate()
        };
    }

    handleChange = (event, date) => {
        this.setState({
            date: date
        });
    }

    render () {

        const {saveData} = this.props;

        return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                {/* <DatePicker 
                        selected={this.state.date}
                        onChange={this.handleChange}
                        withPortal={true} />  */}
                <DatePicker2 
                    value={this.state.date}
                    onChange={this.handleChange}
                    autoOk={true} className='react-datepicker__input-container' textFieldStyle={text_field_style}/>
                <RaisedButton label='Save' primary={true} type='button' 
                    onTouchTap={() => { saveData(this.state.date, Math.random()*1000 + 1000); }}/>
            </div>
        );
    }
}

export {MyDatePicker};
