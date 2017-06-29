import React from 'react';
import PropTypes from 'prop-types';
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

        const customProps = (state, rowInfo, column) => {
            
            if (rowInfo === undefined || rowInfo.index === 0 || rowInfo.index === 10 || rowInfo.index === 14 || rowInfo.index > 16) {
                return {};
            } else {
                return { style: {paddingLeft: '30px'} };
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


        const dataRows = [{
            component: 'Proteins',
            ingredients: nutrientsList.map((nutrient) => (
                nutrient.nutrientsProportion[0] || '---'
            ))
        },{
            component: 'Histidine',
            style: {paddingLeft: '20px'},
            ingredients: [0]
        },{
            component: 'Isoleucine',
            ingredients: [0]
        },{
            component: 'Leucine',
            ingredients: [0]
        },{
            component: 'Lysine',
            ingredients: [0]
        },{
            component: 'Methionine',
            ingredients: [0]
        },{
            component: 'Phenylalanine',
            ingredients: [0]
        },{
            component: 'Threonine',
            ingredients: [0]
        },{
            component: 'Tryptophan',
            ingredients: [0]
        },{
            component: 'Valine',
            ingredients: [0]
        },{
            component: 'Fats',
            ingredients: nutrientsList.map((nutrient) => (
                nutrient.nutrientsProportion[1] || '---'
            ))
        },{
            component: 'Saturated',
            ingredients: [0]
        },{
            component: 'Polyunsaturated',
            ingredients: [0]
        },{
            component: 'Monounsaturated',
            ingredients: [0]
        },{
            component: 'Carbohydrates',
            ingredients: nutrientsList.map((nutrient) => (
                nutrient.nutrientsProportion[2] || '---'
            ))
        },{
            component: 'Dietary fiber',
            ingredients: [0]
        },{
            component: 'Sugar',
            ingredients: [0]
        },{
            component: 'Vitamin A',
            ingredients: [0]
        },{
            component: 'Vitamin C',
            ingredients: [0]
        },{
            component: 'Calcium',
            ingredients: [0]
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
                    defaultPageSize={20} />
            </div>
        );
    }
}

NutritionResultsTable.propTypes = {
    nutrientsList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        nutrientsProportion: PropTypes.arrayOf(PropTypes.number),
        quantity: PropTypes.number
    }))
};


export {NutritionResultsTable};