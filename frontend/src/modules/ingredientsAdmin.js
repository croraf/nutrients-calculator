import {fetchResourceFromBackend} from './utilities/fetchResourceFromBackend';
import {fetchIngredients} from './ingredients';
import {openDialogue} from './defineIngredientDialogue';

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

const updateIngredient = (ingredient, ingredientId) => (dispatch) => {
    
    dispatch({type: 'INGREDIENT_UPDATING'});

    console.log('updating: ', ingredient);

    const options = {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ingredient)};

    fetchResourceFromBackend('/api/ingredients/' + ingredientId, options).then( result => {

        console.log(result);

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

const editIngredient = (ingredientId) => (dispatch) => {
    

    console.log('fetching', ingredientId);

    fetchResourceFromBackend('/api/ingredients/' + ingredientId).then( result => {

        console.log(result);
        dispatch(openDialogue(Object.assign({}, {AA1: 99}, result), ingredientId));
        /*dispatch({type: 'INGREDIENT_DELETED', ingredientId: ingredientId});

        dispatch(fetchIngredients());*/

    });
};


export {saveIngredient, editIngredient, deleteIngredient, updateIngredient};
