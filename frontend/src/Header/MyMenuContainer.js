import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {MyMenu} from './MyMenu';

const mapDispatchToProps = (dispatch) => ({
    navigate: (event, child) => {console.log('dispatching:', child.props.value); dispatch(push(child.props.value));}
});

const mapStateToProps = (state) => ({

    activeLink: state.routing.locationBeforeTransitions.pathname
});

const MyMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MyMenu);

export {MyMenuContainer};