import {connect} from 'react-redux';

import {LoginBoxForm} from './LoginBoxForm';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {console.log(values);/*dispatch*/}
});

const mapStateToProps = (state) => ({

});

const LoginBoxContainer = connect(mapStateToProps, mapDispatchToProps)(LoginBoxForm);

export {LoginBoxContainer};