import {fetchResourceFromBackend} from './utilities/fetchResourceFromBackend';

const closeDialogue = () => (dispatch) => {
    
    dispatch({type: 'CLOSE_DIALOGUE'});

    /*fetchResourceFromBackend('/api/ingredients', options).then( result => {

        console.log(result);
        dispatch({type: 'INGREDIENT_SAVED', ingredientId: result});

        dispatch(fetchIngredients());

    });*/
};

const openDialogue = (initialValues = {}) => (dispatch) => {


    console.log('initial values:', initialValues);
    
    dispatch({type: 'OPEN_DIALOGUE', initialValues});

    /*fetchResourceFromBackend('/api/ingredients/' + ingredientId, options).then( result => {

        console.log(result);
        dispatch({type: 'INGREDIENT_DELETED', ingredientId: ingredientId});

        dispatch(fetchIngredients());

    });*/
};

// not used currently
const saveDialogue = () => (dispatch) => {
    
    dispatch({type: 'INGREDIENT_SAVING'});

    dispatch(closeDialogue());

    /*const options = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ingredient)};

    fetchResourceFromBackend('/api/ingredients', options).then( result => {

        console.log(result);
        dispatch({type: 'INGREDIENT_SAVED', ingredientId: result});

        dispatch(fetchIngredients());

    });*/
};

const defineIngredientDialogueReducer = (state={open: false, initialValues: {}},  action) => {
    switch (action.type) {
        case 'OPEN_DIALOGUE':
            console.log('OPEN_DIALOGUE');
            return {open: true, initialValues: action.initialValues};
        case 'CLOSE_DIALOGUE':
            console.log('CLOSE_DIALOGUE');
            return {open: false, initialValues: {}};
        default:
            return state;
    }
};


export {defineIngredientDialogueReducer, openDialogue, closeDialogue/*, saveDialogue*/};