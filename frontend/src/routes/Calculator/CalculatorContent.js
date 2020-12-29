import React from 'react';

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
        <div style={{ padding: '10px' }}>
            <DataSaver />

            <CalculatorForm
                onSubmit={(values) => {
                    console.log(values);
                    calculateHandler(values.nutrients);
                }} />

            <NutritionResultsTable />
        </div>
    );
};


export default CalculatorContent;
