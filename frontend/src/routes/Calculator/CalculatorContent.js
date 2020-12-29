import React from 'react';

import { Grid } from 'react-flexbox-grid';

import { CalculatorForm } from './CalculatorForm/CalculatorForm';
import NutritionResultsTable from './NutritionResultsTable/NutritionResultsTable';
import DataSaver from './DataSaver/DataSaver';
import { useDispatch, } from 'react-redux';
import { fetchNutrients } from 'src/modules/nutrients';


const CalculatorContent = () => {
    const dispatch = useDispatch();
    const calculateHandler = (foods) => { dispatch(fetchNutrients(foods)); };

    console.log('CalculatorContent render');

    return (
        <Grid fluid style={{ padding: '10px' }}>
            <DataSaver />

            <CalculatorForm
                onSubmit={(values) => {
                    console.log(values);
                    calculateHandler(values.nutrients);
                }} />

            <NutritionResultsTable />
        </Grid>
    );
};


export default CalculatorContent;
