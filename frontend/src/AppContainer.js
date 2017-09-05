
import {connect} from 'react-redux';

import {App} from './App';

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

const mapStateToProps = (state) => ({
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export {AppContainer};

