import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {NavigationBar} from './NavigationBar';

const mapDispatchToProps = (dispatch) => ({
    navigate: (link) => {console.log('dispatcham:' + link); dispatch(push(link));}
});

const mapStateToProps = (state) => ({

    activeLink: state.routing.locationBeforeTransitions.pathname
});

const NavigationBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

export {NavigationBarContainer};