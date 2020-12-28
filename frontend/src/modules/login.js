import { sendLoginRequestAPI } from './utilities/fetchResourceFromBackend';
import { push } from 'connected-react-router';


const sendLoginRequest = (credentials) => (dispatch) => {

    dispatch({ type: 'LOGIN_REQUEST_STARTED', credentials: credentials });

    sendLoginRequestAPI(credentials)
        .then(token => {
            console.log('token:', token);
            localStorage.setItem('wholeprotein_token', token);
            const payloadEncoded = token.split('.')[1];
            const payload = JSON.parse(new Buffer(payloadEncoded, 'base64').toString('ascii'));
            console.log('payload from token:', payload);
            dispatch({ type: 'LOGIN_SUCCESS', name: payload.name });
            dispatch(push('/calculator'));
        }).catch(reason => {
            console.log('unauthorized', reason);
            dispatch({ type: 'UNAUTHORIZED' });
        });
};

const logOut = () => (dispatch) => {
    localStorage.removeItem('wholeprotein_token');
    dispatch({ type: 'LOGOUT_SUCCESS' });
};


const initialState = {
    status: 'PENDING',
    name: '',
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_REQUEST_STARTED':
            console.log('LOGIN_REQUEST_STARTED', action.credentials);
            return { status: 'PENDING', name: '', };
        case 'LOGIN_SUCCESS':
            return { status: 'AUTHENTICATED', name: action.name, };
        case 'LOGOUT_SUCCESS':
            return { status: 'UNAUTHENTICATED', name: '', };
        default:
            return state;
    }
};


export { loginReducer, sendLoginRequest, logOut };
