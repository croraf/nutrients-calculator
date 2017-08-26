import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Row, Column} from 'react-flexbox-grid';

import {CalculatorForm} from './CalculatorForm/CalculatorForm';
import {NutritionResultsTableContainer} from './NutritionResultsTable/NutritionResultsTableContainer';
import {DataSaverContainer} from './DataSaver/DataSaverContainer';

class Calculator extends React.Component {
    render () {

        const {calculateHandler} = this.props;

        return (
            <Grid fluid style={{padding: '10px'}}>

                <DataSaverContainer />

                <CalculatorForm 
                    onSubmit={(values) => {calculateHandler(values.nutrients, this.props.dataSource);}} />

                <NutritionResultsTableContainer />
                
            </Grid>
        );
    }
}

Calculator.propTypes = {
    calculateHandler: PropTypes.func.isRequired
};


export {Calculator};
