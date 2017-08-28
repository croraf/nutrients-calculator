
const calculateCaloriesTarget = (values) => (dispatch) => {

    console.log('calories target data:', values);

    let caloriesTarget = 0;

    if (values.sex === 'male'){
        caloriesTarget = 10 * values.weight + 6.25 * values.height - 5 * values.age + 5;
    } else {
        caloriesTarget = 10 * values.weight + 6.25 * values.height - 5 * values.age - 161;
    }

    switch (values.activity) {
        case 'minor':
            caloriesTarget *= 1.2;
            break;
        case 'average':
            caloriesTarget *= 1.45;
            break;
        case 'heavy':
            caloriesTarget *= 1.7;
            break;
        case 'pro':
            caloriesTarget *= 1.95;
            break;
        default:
            break;
    }

    return dispatch({type: 'CALORIES_TARGET_CALCULATED', caloriesTarget: caloriesTarget});
  
};


const caloriesTargetReducer = (state=0, action) => {
    switch (action.type) {
        case 'CALORIES_TARGET_CALCULATED':
            return action.caloriesTarget;
        default:
            return state;
    }
};


export {caloriesTargetReducer, calculateCaloriesTarget};

