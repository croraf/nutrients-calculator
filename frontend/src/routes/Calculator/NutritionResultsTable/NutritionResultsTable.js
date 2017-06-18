import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';



class NutritionResultsTable extends React.Component {
    render () {

        const {nutrientsList} = this.props;

        const ingredientColumns = nutrientsList.map((ingredient, index) => {
            if (ingredient.name === undefined) {
                return {
                    Header: '---',
                    accessor: 'ingredients[' + index + ']',
                    width: 50
                };
            } else {
                return {
                    Header: ingredient.name + ' [' + (ingredient.quantity || '--- ') + 'g]',
                    accessor: 'ingredients[' + index + ']',
                    /*width: 180,*/
                    minWidth: 150
                };
            }
        });

        const columns = 
            [{Header: '', accessor: 'component'}]
                .concat(ingredientColumns)
                .concat([{Header: 'Total [g]', accessor: 'total'}]);


        const dataRows = [{
            component: 'Proteins',
            ingredients: nutrientsList.map((nutrient) => (
                nutrient.nutrientsProportion[0] || '---'
            ))
        },{
            component: 'Fats',
            ingredients: nutrientsList.map((nutrient) => (
                nutrient.nutrientsProportion[1] || '---'
            ))
        },{
            component: 'Carbohydrates',
            ingredients: nutrientsList.map((nutrient) => (
                nutrient.nutrientsProportion[2] || '---'
            ))
        }];

        const data = dataRows.map((item) => 
            Object.assign(
                {},
                item, 
                {total: item.ingredients.reduce((x, y) => {return y === '---' ? x : (x + y);}, 0)}
            )
        );

        return (
            <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '30px'}}>
                
                <ReactTable 
                    data={data}
                    columns={columns}
                    pageSizeOptions={[10, 15, 25, 50, 100]}
                    defaultPageSize={15} />
            </div>
        );
    }
}

export {NutritionResultsTable};