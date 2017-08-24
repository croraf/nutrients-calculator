
const saveData = (date, foodsAnalyzed) => (dispatch) => {

    console.log('foodsAnalyzed', foodsAnalyzed);

    /* alert('Your intake has been saved: ' + date.format('YYYY-MM-DD') + ', ' + foodsAnalyzed.data[3].total); */
    return dispatch({type: 'SAVE_DAILY_DATA', data: {x: date, y: foodsAnalyzed.data[3].total}});
        
    /* console.log(Object.keys(nutrientsMap).indexOf('203') );
    console.log(dataRows); */
    /* const totalProtein = dataRows[Object.keys(nutrientsMap).indexOf('203')].ingredients
                                .reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0);
    const totalEnergy = dataRows[Object.keys(nutrientsMap).indexOf('208')].ingredients
                                .reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0);
    console.log(totalProtein, totalEnergy); */
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
