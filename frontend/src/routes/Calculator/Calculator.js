import React, { useEffect } from 'react';

import { Grid } from 'react-flexbox-grid';

import { CalculatorForm } from './CalculatorForm/CalculatorForm';
import NutritionResultsTable from './NutritionResultsTable/NutritionResultsTable';
import { DataSaverContainer } from './DataSaver/DataSaverContainer';
import { useDispatch, } from 'react-redux';
import { fetchNutrients } from 'src/modules/nutrients';
import { fetchIngredients } from 'src/modules/ingredients';


const Calculator = () => {
    const dispatch = useDispatch();
    const calculateHandler = (foods) => { dispatch(fetchNutrients(foods)); };

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    console.log('CALCULATOR rerender');

    return (
        <Grid fluid style={{ padding: '10px' }}>
            <DataSaverContainer />

            <CalculatorForm
                onSubmit={(values) => {
                    console.log(values);
                    calculateHandler(values.nutrients);
                }} />

            <NutritionResultsTable />
        </Grid>
    );
};


export default Calculator;
