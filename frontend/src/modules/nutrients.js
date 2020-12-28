import { fetchResourceFromBackend } from './utilities/fetchResourceFromBackend';

const parseNutrient = (nutrientName, item) => {
    const listOfFoodNutrients = item.food.foodNutrients;
    for (const foodNutrient of listOfFoodNutrients) {
        if (foodNutrient.nutrient.name === nutrientName) {
            return foodNutrient.amount * ((item.quantity || 100) / 100);
        }
    }
};

const parseData = (foodsAnalyzed) => {
    const parsed = foodsAnalyzed.map(item => ({
        name: item.food.description,
        quantity: item.quantity || 100,
        'Protein': parseNutrient('Protein', item),
        'Carbohydrate, by difference': parseNutrient('Carbohydrate, by difference', item),
        'Total lipid (fat)': parseNutrient('Total lipid (fat)', item),
        'Water': parseNutrient('Water', item),
    }));
    return parsed;
};

const fetchNutrients = (foods) => async (dispatch, getState) => {
    dispatch({ type: 'nutrients/fetching' });
    console.log('analyzing foods:', foods);

    const foodsDatasource = getState().ingredients.ingredients;
    let fdcIds = [];
    foods.forEach((food) => {
        foodsDatasource.forEach(data => {
            if (food.name === data.description) {
                fdcIds.push(data.fdcId);
            }
        });
    });

    console.log('fetching data for foods:', fdcIds);

    if (fdcIds.length === 0) {
        dispatch({ type: 'nutrients/success', data: [] });
        return;
    }
    
    fetchResourceFromBackend('/api/nutritiveInfo?fdcIds=' + fdcIds.join(','))
        .then(
            (data) => {
                const mergedData = data.map((item, index) => ({
                    food: item, quantity: parseFloat(foods[index].quantity)
                }));

                const parsedData = parseData(mergedData);
                dispatch({ type: 'nutrients/success', data: parsedData });
            }
        );
};

const nutrientsReducer = (state = { fetching: false, data: [] }, action) => {
    switch (action.type) {
        case 'nutrients/fetching':
            return { fetching: true, data: [], };
        case 'nutrients/success':
            return { fetching: false, data: action.data, };
        default:
            return state;
    }
};


export { nutrientsReducer, fetchNutrients };
