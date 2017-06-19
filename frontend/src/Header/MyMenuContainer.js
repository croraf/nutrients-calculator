import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {MyMenu} from './MyMenu';

import {logOut} from 'modules/login';

const mapDispatchToProps = (dispatch) => ({
    navigate: 
        (event, child) => {
            const targetLink = child.props.value;
            if (targetLink === '/login') dispatch(logOut());
            console.log('dispatching:', targetLink); dispatch(push(targetLink));
        }
});

const mapStateToProps = (state) => ({

    activeLink: state.routing.locationBeforeTransitions.pathname,
    username: state.login.token.payload ? state.login.token.payload.name : undefined
});

const MyMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MyMenu);

export {MyMenuContainer};