import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';



class NutritionResultsTable extends React.Component {
    render () {

        const {nutrientsList} = this.props;

        const ingredientColumns = Object.keys(nutrientsList).map((key, index) => ({
            Header: key + ' [' + nutrientsList[key].quantity + 'g]',
            accessor: 'ingredients[' + index + ']',
            /*width: 180,*/
            minWidth: 150
        }));

        const columns = 
            [{Header: '', accessor: 'component'}]
                .concat(ingredientColumns)
                .concat([{Header: 'Total [g]', accessor: 'total'}]);


        const dataRows = [{
            component: 'Proteins',
            ingredients: Object.keys(nutrientsList).map((key) => (
                nutrientsList[key].nutrientsProportion[0]
            ))
        },{
            component: 'Fats',
            ingredients: Object.keys(nutrientsList).map((key) => (
                nutrientsList[key].nutrientsProportion[1]
            ))
        },{
            component: 'Carbohydrates',
            ingredients: Object.keys(nutrientsList).map((key) => (
                nutrientsList[key].nutrientsProportion[2]
            ))
        }];

        const data = dataRows.map((item) => 
            Object.assign(
                {},
                item, 
                {total: item.ingredients.reduce((x, y) => (x + y), 0)}
            )
        );

        return (
            <div style={{marginLeft: '40px', marginRight: '40px', marginTop: '40px'}}>
                
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