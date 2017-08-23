import React from 'react';
import PropTypes from 'prop-types';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {NutritionResultsTableContainer} from './NutritionResultsTable/NutritionResultsTableContainer';
import {DataSaverContainer} from './DataSaver/DataSaverContainer';

class Calculator extends React.Component {
    render () {

        const {calculateHandler} = this.props;

        return (
            <div style={{padding: '10px'}}>

                <DataSaverContainer />

                <CalculatorForm 
                    onSubmit={(values) => {calculateHandler(values.nutrients, this.props.dataSource);}} />

                <NutritionResultsTableContainer />
                
            </div>
        );
    }
}

Calculator.propTypes = {
    calculateHandler: PropTypes.func.isRequired
};


export {Calculator};
