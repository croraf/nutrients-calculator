
const deleteIngredient = (ingredients) => (dispatch) => {
    
    const ingredientsNames = ingredients.map((item) => item.name);
    dispatch({type: 'FETCHING_NUTRIENTS', ingredientsNames: ingredientsNames});

    new Promise((resolve, reject) => {

        const nutrientsList = [];

        ingredientsNames.forEach((ingredientName, index) => {
            nutrientsList[index] = {name: ingredientName};
            nutrientsList[index].nutrientsProportion = 
                (ingredientName === undefined || ingredients[index].quantity === undefined) ? [] 
                    : [parseInt(Math.random()*100), parseInt(Math.random()*100), parseInt(Math.random()*100)];
            nutrientsList[index].quantity = ingredients[index].quantity;
        }, this);

        setTimeout(()=>{
            resolve(nutrientsList);
        }, 1000);
    }).then((nutrientsList) => {

        dispatch({type: 'NUTRIENTS_RETRIEVED', nutrientsList: nutrientsList});
    });
    
};

/*const nutrientsReducer = (state={fetching: false, nutrientsList: []}, action) => {
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
};*/


export {deleteIngredient};
