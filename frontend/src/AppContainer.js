
import {connect} from 'react-redux';

import {App} from './App';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    authed: state.login.authorized
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export {AppContainer};

