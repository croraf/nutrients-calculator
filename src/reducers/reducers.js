



const saveReducer = (state=false, action) => {

    switch (action.type) {
    case 'SAVE_START':
        console.log('saved');
        return true;
    case 'SAVE_ENDED':
        return false;
    default:
        return state;
    }
};

const asyncReducer = (state = 100, action) => {
    console.log('async state: ' + state);
    console.log(action);

    switch (action.type) {
    case 'DYNAMIC':
        return state+1;
    default:
        return state;
    }
};

export {saveReducer, asyncReducer};