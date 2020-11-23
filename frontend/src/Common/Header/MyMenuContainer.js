import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { MyMenu } from './MyMenu';

import { logOut } from 'src/modules/login';

const mapDispatchToProps = (dispatch) => ({
    navigate: (targetLink) => {
        if (targetLink === '/login') dispatch(logOut());
        console.log('dispatching:', targetLink); dispatch(push(targetLink));
    }
});

const mapStateToProps = (state) => ({
    activeLink: state.router.location && state.router.location.pathname,
    username: state.login.name
});

const MyMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MyMenu);

export { MyMenuContainer };
