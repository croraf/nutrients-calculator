import React from 'react';
import PropTypes from 'prop-types';

/* import {MyDatePicker} from './MyDatePicker'; */

import './my-date-picker.css';

import Button from '@material-ui/core/Button';
import moment from 'moment';
import Snackbar from '@material-ui/core/Snackbar';

import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';

import { Row, Col } from 'react-flexbox-grid';

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

        saveData(moment(this.props.activeDate).startOf('day'), foodsAnalyzed);
        
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
            <Row style={{height: '38px', marginBottom: '-10px'}} end='xs'>
                
                <Col xs={3} md={2} lg={1}>
                    <Button
                        variant='outlined' 
                        primary={true}
                        disabled={this.state.snackbarOpen}
                        onTouchTap={this.onSaveHandler} 
                        icon={<SaveIcon/>} 
                        style={{width: '40px', minWidth: '40px'}} />
                </Col>
                <Col xs={4} sm={3} lg={2} style={{minWidth: '270px'}}>

                    <Button
                        variant='outlined' 
                        onTouchTap={activeDateClickHandler}
                        label={activeDate || '<SELECT DATE>'}
                        style={{width: '100%'}}
                        labelStyle={{textTransform: 'none', fontSize: '18px'}} />

                    {/* <div style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center', padding: '8px', cursor: 'pointer', border: '1px solid rgb(0, 188, 212)'}}
                        onClick={activeDateClickHandler}
                    >
                        {activeDate || '<SELECT DATE>'}
                    </div> */}
                </Col>

                <Snackbar 
                    open={this.state.snackbarOpen}
                    message={snacbarMessage}
                    autoHideDuration={3000}
                    onRequestClose={() => {this.toggleSnackbar(false);}}
                    contentStyle={{fontSize: 24, color: 'white'}}
                    bodyStyle={{backgroundColor: 'rgb(0, 188, 212)'}}
                    />
            </Row>
        );
    }
}

export {DataSaver};
