
import React from 'react';
import PropTypes from 'prop-types';

import {MyDatePicker} from './MyDatePicker';

import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

class DataSaver extends React.Component {
    
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

        const {saveData, foodsAnalyzed} = this.props;

        return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>

                <MyDatePicker value={this.state.date} handleChange={this.handleChange}/>
                <RaisedButton label='Save' primary={true} type='button' 
                    onTouchTap={() => { saveData(moment(this.state.date), foodsAnalyzed); }}/>
            </div>
        );
    }
}

export {DataSaver};
