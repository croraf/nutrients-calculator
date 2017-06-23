import {fetchResourceFromBackend} from './utilities/fetchResourceFromBackend';

import {store} from './store';

const fetchIngredients = () => (dispatch) => {
    
    dispatch({type: 'FETCHING_INGREDIENTS'});

    fetchResourceFromBackend('/api/ingredients').then( results => {

        dispatch({type: 'INGREDIENTS_RETRIEVED', list: results});
    });
    
};

const fetchIngredientsReducer = (state={fetching: false, list: []}, action) => {
    switch (action.type) {
        case 'FETCHING_INGREDIENTS':
            console.log('FETCHING_INGREDIENTS');
            return {fetching: true, list: state.list};
        case 'INGREDIENTS_RETRIEVED':
            console.log('INGREDIENTS_RETRIEVED: ' + action.list);
            return {fetching: false, list: action.list};
        default:
            return state;
    }
};


export {fetchIngredientsReducer};



//fake fetching of ingredient names
setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);