import {connect} from 'react-redux';
import {SubmissionError} from 'redux-form';

import {LoginBoxForm} from './LoginBoxForm';

import {sendLoginRequest} from 'modules/login';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(sendLoginRequest(values));
        /*return new Promise ((resolve, reject) => {
            throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' });
        });*/
    }
});

const mapStateToProps = (state) => ({
    rejected: state.login.rejected === true
});

const LoginBoxContainer = connect(mapStateToProps, mapDispatchToProps)(LoginBoxForm);

export {LoginBoxContainer};