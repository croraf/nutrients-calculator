const fetchDataNAL = {
    address: 'https://api.nal.usda.gov/ndb/V2/reports?',
    details: 'type=b&format=json&api_key=NYYLHns54La4bh2r7nLLMfLTgkXYLKVY4Icedoum'
};


const fetchNutrients = (ingredients, dataSource) => (dispatch) => {
    
    dispatch({type: 'FETCHING_NUTRIENTS', ingredients: ingredients});

    console.log('rafa', ingredients);

    let queryCodes = '';
    ingredients.forEach((item, index) => {
        dataSource.forEach(food => {
            if (food.name === item.name) {
                queryCodes += 'ndbno=' + food.ndbno + '&';
            }
        });
    });

    console.log('fetching codes:', queryCodes);
    
    fetch(fetchDataNAL.address + queryCodes + fetchDataNAL.details)
        .then((response) => {
            return response.json();
        }, (reason) => {
            console.log(reason);
        }).then((body) => {
            const foodsAnalyzed = body.foods.map((item, index) => ({
                food: item.food, quantity: parseFloat(ingredients[index].quantity).toFixed(3)
            }));
            dispatch({type: 'NUTRIENTS_DATA_RECEIVED', foodsAnalyzed: foodsAnalyzed});
        });
    
};

const nutrientsReducer = (state={fetching: false, nutrientsList: [], foodsAnalyzed: []}, action) => {
    switch (action.type) {
        case 'FETCHING_NUTRIENTS':
            console.log('FETCHING_NUTRIENTS: ', action.ingredientsNames);
            return {fetching: true, nutrientsList: state.nutrientsList, foodsAnalyzed: state.foodsAnalyzed};
        case 'NUTRIENTS_DATA_RECEIVED':
            console.log('NUTRIENTS_DATA_RECEIVED: ', action.foodsAnalyzed);
            return {fetching: false, nutrientsList: state.nutrientsList, foodsAnalyzed: action.foodsAnalyzed};
        default:
            return state;
    }
};


export {nutrientsReducer, fetchNutrients};
