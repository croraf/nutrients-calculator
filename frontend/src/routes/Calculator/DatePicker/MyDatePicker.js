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
            startDate: moment().startOf('day')
        };
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    render () {

        const {saveData} = this.props;

        return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        withPortal={true} /> 
                <RaisedButton label='Save' primary={true} type='button' 
                    onTouchTap={() => { saveData(this.state.startDate.toDate(), Math.random()*1000 + 1000); }}/>
            </div>
        );
    }
}

export {MyDatePicker};
