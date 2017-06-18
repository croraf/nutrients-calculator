import {fetchResourceFromBackend} from 'utilities/fetchResourceFromBackend';

import {store} from './store';

const sendLoginRequest = (credentials) => (dispatch) => {
    
    dispatch({type: 'LOGIN_REQUEST_STARTED', credentials: credentials});

    fetchResourceFromBackend('/api/login')
        .then(token => {
            dispatch({type: 'TOKEN_RECEIVED', token: token});
        });
    
};

const loginReducer = (state={loginInProgress: false, token: {}}, action) => {

    switch (action.type) {
    case 'LOGIN_REQUEST_STARTED':
        console.log('LOGIN_REQUEST_STARTED', action.credentials);
        return {loginInProgress: true, token: state.token};
    case 'TOKEN_RECEIVED':
        console.log('TOKEN_RECEIVED: ', action.token);
        return {loginInProgress: false, token: action.token};
    default:
        return state;
    }
};


export {loginReducer, sendLoginRequest};
