import {connect} from 'react-redux';

import {Login} from './Login';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    unauthorized: state.login.token === false
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export {LoginContainer};