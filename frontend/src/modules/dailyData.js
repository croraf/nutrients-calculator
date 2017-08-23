
const saveData = (date, calories) => (dispatch) => {

    alert('Your intake has been saved: ' + date.format('YYYY-MM-DD') + ', ' + calories);
    return dispatch({type: 'SAVE_DAILY_DATA', data: {x: date, y: calories}});
};

const dailyDataReducer = (state=[], action) => {
    switch (action.type) {
        case 'SAVE_DAILY_DATA':
            console.log('SAVE_DAILY_DATA', 'date:', action.data.x.format('YYYY-MM-DD'), 'calories:', action.data.y);
            return [...state, action.data];
        default:
            return state;
    }
};


export {dailyDataReducer, saveData};


//initial fetching of ingredients
//setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);
