import React from 'react';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {NutritionResultsTable} from './NutritionResultsTable';

class Calculator extends React.Component {
    render () {

        return (
            <div style={{padding: '0px'}}>
                <CalculatorForm 
                    onSubmit={(values) => {console.log('submitting: ' + JSON.stringify(values));}} />
                
                <NutritionResultsTable />
                
            </div>
        );
    }
}

export {Calculator};