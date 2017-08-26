import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';


class MyDayBackgroundWrapper extends React.Component {
    render () {

        const {value, markedDates, dateSelectHandler} = this.props;

        const markedDate = markedDates.find((date) => (date.toDateString() === value.toDateString()));

        return (
            <div 
                style={{
                    flexBasis: '14.285714285714285%',
                    maxWidth: '14.285714285714285%'}}
                className='rbc-day-bg'
                >
                <FlatButton 
                    style={{
                        marginTop: '20px',
                        height: '100%',
                        width: '100%',
                    }}
                    backgroundColor={markedDate && 'aqua'}
                    hoverColor='lightgray'
                    onClick={() => {dateSelectHandler(value.toDateString());}}>
                    
                    {markedDate ? 'filled' : <div />}
                </FlatButton>
            </div>
        );
    }
}

export {MyDayBackgroundWrapper};
