import React, { useEffect } from 'react';

import { Grid } from 'react-flexbox-grid';

import { CalculatorForm } from './CalculatorForm/CalculatorForm';
import { NutritionResultsTableContainer } from './NutritionResultsTable/NutritionResultsTableContainer';
import { DataSaverContainer } from './DataSaver/DataSaverContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNutrients } from 'src/modules/nutrients';
import { fetchIngredients } from 'src/modules/ingredients';


const Calculator = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const calculateHandler = (ingredients, dataSource) => { dispatch(fetchNutrients(ingredients, dataSource)); };

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    return (
        <Grid fluid style={{ padding: '10px' }}>
            <DataSaverContainer />

            <CalculatorForm
                onSubmit={(values) => { calculateHandler(values.nutrients, ingredients); }} />
                
            <NutritionResultsTableContainer />
        </Grid>
    );
};


export default Calculator;
