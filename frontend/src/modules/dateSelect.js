

const dateSelect = (date) => (dispatch) => {

    dispatch({type: 'DATE_SELECTED', date});
};


const selectDateReducer = (state={activeDate: undefined}, action) => {
    switch (action.type) {
        case 'DATE_SELECTED':
            console.log('DATE_SELECTED', action.date);
            return {activeDate: action.date};
        default:
            return state;
    }
};


export {selectDateReducer, dateSelect};


//initial fetching of ingredients
//setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);
