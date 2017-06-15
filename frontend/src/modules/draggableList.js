const draggableListsReducer = (state={source: [11,12,13], target: [1,2,3]}, action) => {
    switch (action.type) {
    case 'ITEM_DROPPED':
        return {
            source:[...state.source],
            target:[...state.target, action.item]
        };
    default:
        return state;
    }
};

export {draggableListsReducer};