import {fetchResourceFromBackend} from './utilities/fetchResourceFromBackend';

import {store} from './store';

const fetchIngredients = () => (dispatch) => {
    
    dispatch({type: 'FETCHING_INGREDIENTS'});

    fetchResourceFromBackend('/api/ingredients').then( result => {

        dispatch({type: 'INGREDIENTS_RETRIEVED', retrievedIngredients: result});
    });
    
};

const fetchIngredientsReducer = (state={fetching: false, ingredients: {}}, action) => {
    switch (action.type) {
        case 'FETCHING_INGREDIENTS':
            console.log('FETCHING_INGREDIENTS');
            return {fetching: true, ingredients: state.ingredients};
        case 'INGREDIENTS_RETRIEVED':
            console.log('INGREDIENTS_RETRIEVED: ', action.retrievedIngredients);
            return {fetching: false, ingredients: action.retrievedIngredients};
        default:
            return state;
    }
};


export {fetchIngredientsReducer, fetchIngredients};


//initial fetching of ingredients
setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);