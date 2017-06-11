import React from 'react';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';

class Calculator extends React.Component {
    render () {

        const selectedNutrientsList = [
            {name: 'oat', quantity: 100},
            {name: 'corn', quantity: 200}
        ];
        return (
            <div style={{padding: '10px'}}>
                <CalculatorForm 
                    onSubmit={(values) => {console.log('submitting: ' + JSON.stringify(values));}}
                    selectedNutrientsList={selectedNutrientsList} />
            </div>
        );
    }
}

export {Calculator};