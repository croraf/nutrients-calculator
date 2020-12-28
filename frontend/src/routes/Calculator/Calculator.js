import React, { useEffect } from 'react';

import { Grid } from 'react-flexbox-grid';

import { CalculatorForm } from './CalculatorForm/CalculatorForm';
import NutritionResultsTable from './NutritionResultsTable/NutritionResultsTable';
import { DataSaverContainer } from './DataSaver/DataSaverContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNutrients } from 'src/modules/nutrients';
import { fetchIngredients } from 'src/modules/ingredients';


const Calculator = () => {
    const dispatch = useDispatch();
    const calculateHandler = (foods) => { dispatch(fetchNutrients(foods)); };

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    const nutritionDataFetching = useSelector(state => state.nutrients.fetching);

    return (
        <Grid fluid style={{ padding: '10px' }}>
            <DataSaverContainer />

            <CalculatorForm
                onSubmit={(values) => {
                    console.log(values);
                    calculateHandler(values.nutrients);
                }} />

            <div style={{ width: '100%', marginTop: '1rem' }}>
                {nutritionDataFetching ? <div>Processing...</div> : <NutritionResultsTable />}
            </div>
        </Grid>
    );
};


export default Calculator;
