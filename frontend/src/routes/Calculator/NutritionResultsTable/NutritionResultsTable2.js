import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { nutrientsMap } from './nutrientsMap';

const tableStyleOuter = {
    marginLeft: '-5px',
    marginRight: '-5px',
    marginTop: '30px',
    border: '2px solid rgb(0, 188, 212)',
    borderRadius: '5px'
};

class NutritionResultsTable extends React.Component {
    render () {

        const {foodsAnalyzed} = this.props;

        const ingredientColumns = foodsAnalyzed.map((foodWrapper, index) => {
            const ingredient = foodWrapper.food;

            if (ingredient.desc === undefined) {
                return {
                    Header: '---',
                    accessor: 'ingredients[' + index + ']',
                    width: 50,
                    style: {textAlign: 'center'}
                };
            } else {
                return {
                    Header: ingredient.desc.name + ' [' + (ingredient.quantity || '--- ') + 'g]',
                    accessor: 'ingredients[' + index + ']',
                    width: 150,
                    minWidth: 150,
                    style: {textAlign: 'center'}
                };
            }
        });

        const customProps = (state, rowInfo, column) => {
            
            if (rowInfo === undefined || rowInfo.index === 0 || rowInfo.index === 10 || rowInfo.index === 14 || rowInfo.index > 16) {
                return {};
            } else {
                return { /* style: {paddingLeft: '30px'} */ };
            }
            /*switch (rowInfo.index) {
            case 1:
            case 2:
                return { style: {paddingLeft: '20px'} };
            default:
                return { style: {} };   
            }*/
        };

        const columns = 
            [{Header: '', accessor: 'component', width: 150, getProps: customProps}]
                .concat(ingredientColumns)
                .concat([{Header: 'Total [g]', accessor: 'total', width: 100, style: {textAlign: 'center'}}]);

        /* console.log('name:', foodsAnalyzed.desc.name);
        foodsAnalyzed.nutrients.forEach((nutrient) => {
            console.log('nutrient name:', nutrient.name, ', quantity:', nutrient.value);
        }); */

        let dataRows = [];

        if (foodsAnalyzed.length > 0) {
            dataRows = Object.keys(nutrientsMap).map((key) => ({
                component: nutrientsMap[key].name,
                ingredients: []
            })); 
        } 

        /* console.log('dataRows', dataRows); */
        if (foodsAnalyzed.length > 0) {
            foodsAnalyzed[0].food.nutrients.forEach((nutrient, index) => {
                if (index > 20) return;
                const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
                if (rowIndex === -1) console.log('no nutrient row');
                else dataRows[rowIndex].ingredients[0] = nutrient.value;
            });
        }

        if (foodsAnalyzed.length > 1) {
            foodsAnalyzed[1].food.nutrients.forEach((nutrient, index) => {
                if (index > 20) return;
                const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
                if (rowIndex === -1) console.log('no nutrient row');
                else dataRows[rowIndex].ingredients[1] = nutrient.value;
            });
            
        }

        if (foodsAnalyzed.length > 2) {
            foodsAnalyzed[2].food.nutrients.forEach((nutrient, index) => {
                if (index > 20) return;
                const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
                if (rowIndex === -1) console.log('no nutrient row');
                else dataRows[rowIndex].ingredients[2] = nutrient.value;
            });
            
        } 


        const data = dataRows.map((item) => 
            Object.assign(
                {},
                item, 
                {total: item.ingredients.reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0)}
            )
        );

        return (
            <div style={tableStyleOuter}>
                
                <ReactTable 
                    data={data}
                    columns={columns}
                    showPagination={false}
                    pageSizeOptions={[10, 15, 25, 50, 100]}
                    defaultPageSize={33} />
            </div>
        );
    }
}

NutritionResultsTable.propTypes = {
    /* nutrientsList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        nutrientsProportion: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired).isRequired */
};


export {NutritionResultsTable};
