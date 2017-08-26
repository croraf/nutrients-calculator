
import React from 'react';
import PropTypes from 'prop-types';

/* import {MyDatePicker} from './MyDatePicker'; */

import './my-date-picker.css';

import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import Snackbar from 'material-ui/Snackbar';

class DataSaver extends React.Component {
    
    constructor (props) {
        super(props);
        /* moment.locale('de'); */
        this.state = {
            /* date: moment().startOf('day').toDate(), */
            snackbarOpen: false
        };
    }

    /* handleChange = (event, date) => {
        this.setState({
            date: date
        });
    } */

    toggleSnackbar = (open) => {
        this.setState({
            snackbarOpen: open
        });
    }

    onSaveHandler = () => {
        
        const {saveData, foodsAnalyzed} = this.props;

        saveData(moment(this.props.activeDate), foodsAnalyzed); this.toggleSnackbar(true);
    }

    render () {

        const {foodsAnalyzed, activeDate, activeDateClickHandler} = this.props;

        return (
            <div style={{display: 'flex', justifyContent: 'center', height: '44px'}}>

                <div style={{fontSize: 24, margin: '8px', cursor: 'pointer'}}
                    onClick={activeDateClickHandler}
                >
                    {activeDate || '<SELECT DATE>'}
                </div>
                {/* <MyDatePicker value={this.state.date} handleChange={this.handleChange}/> */}
                <RaisedButton
                    label='Save'
                    primary={true}
                    type='button'
                    disabled={this.state.snackbarOpen}
                    onTouchTap={this.onSaveHandler} 
                    className='my-data-saver'
                    style={{height: '100%'}}/>
                <Snackbar 
                    open={this.state.snackbarOpen}
                    message={'Saved! (date: ' + moment(activeDate).format('YYYY-MM-DD') + ', calories: ' + foodsAnalyzed.data[3].total + ')'}
                    autoHideDuration={5000}
                    onRequestClose={() => {this.toggleSnackbar(false);}}
                    contentStyle={{fontSize: 24, color: 'white'}}
                    bodyStyle={{backgroundColor: 'rgb(0, 188, 212)'}}
                    />
            </div>
        );
    }
}

export {DataSaver};
