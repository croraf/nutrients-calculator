import {sendLoginRequestAPI} from './utilities/fetchResourceFromBackend';

import {push} from 'connected-react-router';

const sendLoginRequest = (credentials) => (dispatch) => {
    
    dispatch({type: 'LOGIN_REQUEST_STARTED', credentials: credentials});

    sendLoginRequestAPI(credentials)
        .then(token => {
            
            console.log('token:', token);

            localStorage.setItem('wholeprotein_token', token);

            const payloadEncoded = token.split('.')[1];
            const payload = JSON.parse(new Buffer(payloadEncoded, 'base64').toString('ascii'));

            console.log('payload from token:', payload);

            dispatch({type: 'TOKEN_RECEIVED', name: payload.name});

            dispatch(push('/calculator'));
        }).catch(reason => {
            console.log('unauthorized', reason);
            dispatch({type: 'UNAUTHORIZED'});
        });
    
};

const logOut = () => (dispatch)=> {

    localStorage.removeItem('wholeprotein_token');

    dispatch({type: 'LOG_OUT'});
};

const loginReducer = (state={loginInProgress: false, name: '', role: '', authorized: false, rejected: false}, action) => {

    switch (action.type) {
        case 'LOGIN_REQUEST_STARTED':
            console.log('LOGIN_REQUEST_STARTED', action.credentials);
            return Object.assign({}, state, {loginInProgress: true});
        case 'TOKEN_RECEIVED':
            console.log('TOKEN_RECEIVED');
            return Object.assign({}, state, {
                loginInProgress: false,
                name: action.name,
                authorized: true,
                rejected: false}
            );
        case 'LOG_OUT':
            console.log('LOG_OUT');
            return Object.assign({}, state, {name: '', role: '', authorized: false});
        case 'UNAUTHORIZED':
            console.log('UNAUTHORIZED');
            return Object.assign({}, state, {loginInProgress: false, rejected: true}); 
        default:
            return state;
    }
};


export {loginReducer, sendLoginRequest, logOut};
