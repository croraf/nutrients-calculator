
const fetchNutrients = (ingredients) => (dispatch) => {
    
    const ingredientsNames = ingredients.map((item) => item.name);
    dispatch({type: 'FETCHING_NUTRIENTS', ingredientsNames: ingredientsNames});

    new Promise((resolve, reject) => {

        const nutrientsList = [];

        ingredientsNames.forEach((ingredientName, index) => {
            nutrientsList[index] = {name: ingredientName};
            nutrientsList[index].nutrientsProportion = 
                (ingredientName === undefined || ingredients[index].quantity === undefined) ? [] 
                    : [Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100)];
            nutrientsList[index].quantity = parseInt(ingredients[index].quantity);
        }, this);

        setTimeout(()=>{
            resolve(nutrientsList);
        }, 300);
    }).then((nutrientsList) => {

        dispatch({type: 'NUTRIENTS_RETRIEVED', nutrientsList: nutrientsList});
    });

    /*fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(responseList => {
            const ingredientsList = responseList.map((item) => item.name);
            dispatch({type: 'NUTRIENTS_RETRIEVED', ingredients: ingredientsList});
        });*/

    


    /*console.log('fetchIngredient method ended');*/
    
};

const nutrientsReducer = (state={fetching: false, nutrientsList: []}, action) => {
    switch (action.type) {
        case 'FETCHING_NUTRIENTS':
            console.log('FETCHING_NUTRIENTS: ' + action.ingredientsNames);
            return {fetching: true, nutrientsList: state.nutrientsList};
        case 'NUTRIENTS_RETRIEVED':
            console.log('NUTRIENTS_RETRIEVED: ', action.nutrientsList);
            return {fetching: false, nutrientsList: action.nutrientsList};
        default:
            return state;
    }
};


export {nutrientsReducer, fetchNutrients};
