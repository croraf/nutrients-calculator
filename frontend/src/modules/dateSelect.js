

const dateSelect = (date) => (dispatch) => {

    return dispatch({type: 'DATE_SELECTED', date});

        
    /* console.log(Object.keys(nutrientsMap).indexOf('203') );
    console.log(dataRows); */
    /* const totalProtein = dataRows[Object.keys(nutrientsMap).indexOf('203')].ingredients
                                .reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0);
    const totalEnergy = dataRows[Object.keys(nutrientsMap).indexOf('208')].ingredients
                                .reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0);
    console.log(totalProtein, totalEnergy); */
};


const selectDateReducer = (state=[], action) => {
    switch (action.type) {
        case 'DATE_SELECTED':
            console.log('DATE_SELECTED', action.date);
            return state;
        default:
            return state;
    }
};


export {selectDateReducer, dateSelect};


//initial fetching of ingredients
//setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);
