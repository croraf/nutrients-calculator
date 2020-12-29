import { REHYDRATE } from 'redux-persist/constants';
import moment from 'moment';


const saveData = (date, analyzedData) => (dispatch) => {

    console.log('date:', date);
    console.log('analyzedData:', analyzedData);

    return dispatch({ type: 'SAVE_DAILY_DATA', date, data: analyzedData });

    /* console.log(Object.keys(nutrientsMap).indexOf('203') );
    console.log(dataRows); */
    /* const totalProtein = dataRows[Object.keys(nutrientsMap).indexOf('203')].ingredients
                                .reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0);
    const totalEnergy = dataRows[Object.keys(nutrientsMap).indexOf('208')].ingredients
                                .reduce((x, y) => {return y === '---' ? x : (x + parseFloat(y));}, 0);
    console.log(totalProtein, totalEnergy); */
};


const dailyDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_DAILY_DATA':
            return { ...state, [action.date]: action.data };
        case REHYDRATE:
            console.log(action.payload.dailyData);
            return action.payload.dailyData.map(item => {
                return { x: moment(item.x), y: item.y };
            });
        default:
            return state;
    }
};


export { dailyDataReducer, saveData };


//initial fetching of ingredients
//setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);
