import React from 'react';
import PropTypes from 'prop-types';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {NutritionResultsTableContainer} from './NutritionResultsTable/NutritionResultsTableContainer';

class Calculator extends React.Component {
    render () {

        const {calculateHandler} = this.props;

        return (
            <div style={{padding: '10px'}}>
                <CalculatorForm 
                    onSubmit={(values) => {calculateHandler(values.nutrients);}} />
                
                <NutritionResultsTableContainer />
                
            </div>
        );
    }
}

Calculator.propTypes = {
    calculateHandler: PropTypes.func.isRequired
};


export {Calculator};