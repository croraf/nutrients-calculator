
const fetchIngredientSuggestions = (text) => (dispatch) => {
    
    dispatch({type: 'FETCHING_INGREDIENTS_SUGGESTIONS'});

    /*const fetchSkillsList = new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve([text, text + '2', text + '3']);
        }, 3000);
    });*/

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(responseList => {
            const resultsList = responseList.map((item) => item.name);
            dispatch({type: 'SKILLS_LIST_RETRIEVED', results: resultsList});
        });

    
    /*fetchSkillsList.then((resultsList) => {

        dispatch({type: 'SKILLS_LIST_RETRIEVED', results: resultsList});
    });*/

    console.log('fetchSkillsList method ended');
    
};

const fetchSuggestionsReducer = (state={fetching: false, results: []}, action) => {
    switch (action.type) {
    case 'FETCHING_INGREDIENTS_SUGGESTIONS':
        console.log('FETCHING_INGREDIENTS_SUGGESTIONS');
        return {fetching: true, results: state.results};
    case 'SUGGESTIONS_RETRIEVED':
        console.log('SUGGESTIONS_RETRIEVED: ' + action.results);
        return {fetching: false, results: action.results};
    default:
        return state;
    }
};


export {fetchSuggestionsReducer, fetchIngredientSuggestions};
