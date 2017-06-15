import React from 'react';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {NutritionResultsTableContainer} from './NutritionResultsTable/NutritionResultsTableContainer';

class Calculator extends React.Component {
    render () {

        const {calculateHandler} = this.props;

        return (
            <div style={{padding: '0px'}}>
                <CalculatorForm 
                    onSubmit={(values) => {calculateHandler(values.nutrients);}} />
                
                <NutritionResultsTableContainer />
                
            </div>
        );
    }
}

export {Calculator};