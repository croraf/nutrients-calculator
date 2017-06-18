import {fetchResourceFromBackend} from 'utilities/fetchResourceFromBackend';

import {store} from './store';

const fetchIngredientSuggestions = (text) => (dispatch) => {
    
    dispatch({type: 'FETCHING_INGREDIENTS_SUGGESTIONS'});

    /*const fetchSkillsList = new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve([text, text + '2', text + '3']);
        }, 3000);
    });*/

    console.log(text);
    /*if (text === '') {
        dispatch({type: 'SUGGESTIONS_RETRIEVED', list: []});
    } else */{
        fetchResourceFromBackend('/api/suggestions/' + text)
            .then(resultsList => {
                dispatch({type: 'SUGGESTIONS_RETRIEVED', list: resultsList});
            });
    }
    
    
    /*fetchSkillsList.then((resultsList) => {

        dispatch({type: 'SKILLS_LIST_RETRIEVED', results: resultsList});
    });*/

    //console.log('fetchIngredientSuggestions method ended');
    
};

const fetchSuggestionsReducer = (state={fetching: false, list: []}, action) => {
    switch (action.type) {
    case 'FETCHING_INGREDIENTS_SUGGESTIONS':
        console.log('FETCHING_INGREDIENTS_SUGGESTIONS');
        return {fetching: true, list: state.list};
    case 'SUGGESTIONS_RETRIEVED':
        console.log('SUGGESTIONS_RETRIEVED: ' + action.list);
        return {fetching: false, list: action.list};
    default:
        return state;
    }
};


export {fetchSuggestionsReducer};



//fake fetching of ingredient names
setTimeout(() => {store.dispatch(fetchIngredientSuggestions(''));}, 1000);