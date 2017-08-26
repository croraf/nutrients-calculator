

const dateSelect = (date, isEdit) => (dispatch) => {

    dispatch({type: 'DATE_SELECTED', data: {date, isEdit}});
};


const selectDateReducer = (state={activeDate: undefined, isEdit: false}, action) => {
    switch (action.type) {
        case 'DATE_SELECTED':
            console.log('DATE_SELECTED', action.data.date);
            return {activeDate: action.data.date, isEdit: action.data.isEdit};
        default:
            return state;
    }
};


export {selectDateReducer, dateSelect};


//initial fetching of ingredients
//setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);
