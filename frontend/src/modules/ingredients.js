import {fetchResourceFromBackend} from './utilities/fetchResourceFromBackend';
//import {store} from './store';

const fetchIngredients = () => (dispatch) => {
    dispatch({type: 'foods/fetching'});
    return fetchResourceFromBackend('/api/foods').then(result => {
        dispatch({type: 'foods/fetched', data: result});
    });
};

const fetchIngredientsReducer = (state={fetching: false, ingredients: []}, action) => {
    switch (action.type) {
        case 'foods/fetching':
            return {...state, fetching: true};
        case 'foods/fetched':
            return {fetching: false, ingredients: action.data};
        default:
            return state;
    }
};


export {fetchIngredientsReducer, fetchIngredients};


//initial fetching of ingredients
//setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);
