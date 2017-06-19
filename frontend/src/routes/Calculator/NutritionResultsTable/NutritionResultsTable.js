import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const tableStyleOuter = {
    marginLeft: '-5px',
    marginRight: '-5px',
    marginTop: '30px',
    border: '2px solid rgb(0, 188, 212)',
    borderRadius: '5px'
};

class NutritionResultsTable extends React.Component {
    render () {

        const {nutrientsList} = this.props;

        const ingredientColumns = nutrientsList.map((ingredient, index) => {
            if (ingredient.name === undefined) {
                return {
                    Header: '---',
                    accessor: 'ingredients[' + index + ']',
                    width: 50,
                    style: {textAlign: 'center'}
                };
            } else {
                return {
                    Header: ingredient.name + ' [' + (ingredient.quantity || '--- ') + 'g]',
                    accessor: 'ingredients[' + index + ']',
                    width: 150,
                    minWidth: 150,
                    style: {textAlign: 'center'}
                };
            }
        });

        const columns = 
            [{Header: '', accessor: 'component', width: 150}]
                .concat(ingredientColumns)
                .concat([{Header: 'Total [g]', accessor: 'total', width: 100, style: {textAlign: 'center'}}]);


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
            <div style={tableStyleOuter}>
                
                <ReactTable 
                    data={data}
                    columns={columns}
                    showPagination={false}
                    pageSizeOptions={[10, 15, 25, 50, 100]}
                    defaultPageSize={15} />
            </div>
        );
    }
}

export {NutritionResultsTable};