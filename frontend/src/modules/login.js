import {sendLoginRequestAPI} from './utilities/fetchResourceFromBackend';

import {push} from 'react-router-redux';

const sendLoginRequest = (credentials) => (dispatch) => {
    
    dispatch({type: 'LOGIN_REQUEST_STARTED', credentials: credentials});

    sendLoginRequestAPI(credentials)
        .then(token => {
            dispatch({type: 'TOKEN_RECEIVED', token: token});

            dispatch(push('/calculator'));
        }).catch(reason => {
            console.log('unauthorized');
            dispatch({type: 'UNAUTHORIZED', token: false});
        });
    
};

const logOut = () => ({
    type: 'LOG_OUT'
});

const loginReducer = (state={loginInProgress: false, token: {}}, action) => {

    switch (action.type) {
    case 'LOGIN_REQUEST_STARTED':
        console.log('LOGIN_REQUEST_STARTED', action.credentials);
        return {loginInProgress: true, token: state.token};
    case 'TOKEN_RECEIVED':
        console.log('TOKEN_RECEIVED: ', action.token);
        return {loginInProgress: false, token: action.token};
    case 'LOG_OUT':
        console.log('LOG_OUT');
        return {loginInProgress: false, token: {}};
    case 'UNAUTHORIZED':
        console.log('UNAUTHORIZED');
        return {loginInProgress: false, token: action.token};
    default:
        return state;
    }
};


export {loginReducer, sendLoginRequest, logOut};
