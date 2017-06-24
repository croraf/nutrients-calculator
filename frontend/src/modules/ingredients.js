import {fetchResourceFromBackend} from './utilities/fetchResourceFromBackend';

import {store} from './store';

const fetchIngredients = () => (dispatch) => {
    
    dispatch({type: 'FETCHING_INGREDIENTS'});

    fetchResourceFromBackend('/api/ingredients').then( result => {

        dispatch({type: 'INGREDIENTS_RETRIEVED', retrievedIngredients: result});
    });
    
};

const saveIngredient = (ingredient) => (dispatch) => {
    
    dispatch({type: 'INGREDIENT_SAVING'});

    console.log('saving: ', ingredient);

    const options = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ingredient)};

    fetchResourceFromBackend('/api/ingredients', options).then( result => {

        console.log(result);
        dispatch({type: 'INGREDIENT_SAVED', ingredientId: result});

        dispatch(fetchIngredients());

    });
};

const deleteIngredient = (ingredientId) => (dispatch) => {
    
    dispatch({type: 'INGREDIENT_DELETING'});

    console.log('deleting', ingredientId);

    const options = {method: 'DELETE'};

    fetchResourceFromBackend('/api/ingredients/' + ingredientId, options).then( result => {

        console.log(result);
        dispatch({type: 'INGREDIENT_DELETED', ingredientId: ingredientId});

        dispatch(fetchIngredients());

    });
};

const fetchIngredientsReducer = (state={fetching: false, ingredients: []}, action) => {
    switch (action.type) {
        case 'FETCHING_INGREDIENTS':
            console.log('FETCHING_INGREDIENTS');
            return {fetching: true, ingredients: state.ingredients};
        case 'INGREDIENTS_RETRIEVED':
            console.log('INGREDIENTS_RETRIEVED: ', action.retrievedIngredients);
            return {fetching: false, ingredients: action.retrievedIngredients};
        case 'INGREDIENT_SAVING':
            // TODO
            return state;
        case 'INGREDIENT_SAVED':
            // TODO
            return state;
        default:
            return state;
    }
};


export {fetchIngredientsReducer, saveIngredient, deleteIngredient};



//fake fetching of ingredient names
setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);