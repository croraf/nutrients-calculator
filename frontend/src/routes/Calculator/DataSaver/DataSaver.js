
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
        this.state = {
            snackbarOpen: false
        };
    }

    toggleSnackbar = (open) => {
        this.setState({
            snackbarOpen: open
        });
    }

    onSaveHandler = () => {
        
        const {saveData, foodsAnalyzed} = this.props;

        saveData(moment(this.props.activeDate), foodsAnalyzed);
        
        this.toggleSnackbar(true);
    }

    render () {

        const {foodsAnalyzed, activeDate, activeDateClickHandler, isEdit} = this.props;

        const snacbarMessage = 
            (isEdit ? 'Edited!' : 'Saved!') 
            + ' (date: ' + 
            moment(activeDate).format('YYYY-MM-DD') + 
            ', calories: ' + 
            foodsAnalyzed.data[3].total + ')';

        return (
            <div style={{display: 'flex', justifyContent: 'center', height: '44px'}}>

                <div style={{fontSize: 24, margin: '8px', cursor: 'pointer'}}
                    onClick={activeDateClickHandler}
                >
                    {activeDate || '<SELECT DATE>'}
                </div>
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
                    message={snacbarMessage}
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
