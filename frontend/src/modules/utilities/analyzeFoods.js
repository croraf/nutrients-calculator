
import { nutrientsMap } from './nutrientsMap';

const analyzeFoods = (foodsAnalyzed) => {

    const ingredientColumns = foodsAnalyzed.map((food, index) => {
        return {
            Header: food.description + ' [' + (food.quantity || '--- ') + 'g]',
            accessor: 'ingredients[' + index + ']',
            width: 150,
            minWidth: 150,
            style: { textAlign: 'center' }
        };
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
        [{ Header: '', accessor: 'component', width: 200, getProps: customProps }]
            .concat(ingredientColumns)
            .concat([{ Header: 'Total [g]', accessor: 'total', width: 100, style: { textAlign: 'center' } }]);

    /* console.log('name:', foodsAnalyzed.desc.name);
    foodsAnalyzed.nutrients.forEach((nutrient) => {
        console.log('nutrient name:', nutrient.name, ', quantity:', nutrient.value);
    }); */

    let dataRows = [];

    dataRows = Object.keys(nutrientsMap).map((key) => ({
        component: nutrientsMap[key].name,
        ingredients: []
    }));

    /* console.log('dataRows', dataRows); */
    if (foodsAnalyzed.length > 0) {
        foodsAnalyzed[0].food.nutrients.forEach((nutrient, index) => {
            if (index > 20) return;
            const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
            if (rowIndex === -1) console.log('no nutrient row');
            else dataRows[rowIndex].ingredients[0] = nutrient.value * foodsAnalyzed[0].quantity / 100;
        });
    }

    if (foodsAnalyzed.length > 1) {
        foodsAnalyzed[1].food.nutrients.forEach((nutrient, index) => {
            if (index > 20) return;
            const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
            if (rowIndex === -1) console.log('no nutrient row');
            else dataRows[rowIndex].ingredients[1] = nutrient.value * foodsAnalyzed[1].quantity / 100;
        });

    }

    if (foodsAnalyzed.length > 2) {
        foodsAnalyzed[2].food.nutrients.forEach((nutrient, index) => {
            if (index > 20) return;
            const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
            if (rowIndex === -1) console.log('no nutrient row');
            else dataRows[rowIndex].ingredients[2] = nutrient.value * foodsAnalyzed[2].quantity / 100;
        });

    }

    if (foodsAnalyzed.length > 3) {
        foodsAnalyzed[3].food.nutrients.forEach((nutrient, index) => {
            if (index > 20) return;
            const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
            if (rowIndex === -1) console.log('no nutrient row');
            else dataRows[rowIndex].ingredients[3] = nutrient.value * foodsAnalyzed[3].quantity / 100;
        });
    }
    if (foodsAnalyzed.length > 4) {
        foodsAnalyzed[4].food.nutrients.forEach((nutrient, index) => {
            if (index > 20) return;
            const rowIndex = Object.keys(nutrientsMap).indexOf(nutrient.nutrient_id);
            if (rowIndex === -1) console.log('no nutrient row');
            else dataRows[rowIndex].ingredients[4] = nutrient.value * foodsAnalyzed[4].quantity / 100;
        });
    }


    const data = dataRows.map((item) =>
        Object.assign(
            {},
            item,
            { total: item.ingredients.reduce((x, y) => { return y === '---' ? x : (x + parseFloat(y)); }, 0) }
        )
    );

    return { columns, data };
};

export { analyzeFoods };
