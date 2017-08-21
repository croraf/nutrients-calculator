import React from 'react';
import PropTypes from 'prop-types';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {NutritionResultsTableContainer} from './NutritionResultsTable/NutritionResultsTableContainer';
import {NutritionResultsTableContainer2} from './NutritionResultsTable/NutritionResultsTableContainer2';
import {DatePickerContainer} from './DatePicker/DatePickerContainer';

class Calculator extends React.Component {
    render () {

        const {calculateHandler} = this.props;

        return (
            <div style={{padding: '10px'}}>

                <DatePickerContainer />

                <CalculatorForm 
                    onSubmit={(values) => {calculateHandler(values.nutrients, this.props.dataSource);}} />
                
                {/* <NutritionResultsTableContainer /> */}

                <NutritionResultsTableContainer2 />
                
            </div>
        );
    }
}

Calculator.propTypes = {
    calculateHandler: PropTypes.func.isRequired
};


export {Calculator};
