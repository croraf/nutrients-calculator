import {connect} from 'react-redux';

import {LoginBoxForm} from './LoginBoxForm';

import {sendLoginRequest} from 'modules/login';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {dispatch(sendLoginRequest(values));}
});

const mapStateToProps = (state) => ({

});

const LoginBoxContainer = connect(mapStateToProps, mapDispatchToProps)(LoginBoxForm);

export {LoginBoxContainer};