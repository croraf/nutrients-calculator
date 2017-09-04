import {connect} from 'react-redux';

import {DynamicRoute} from './DynamicRoute';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    authorized: state.login.authorized
});

const DynamicRouteContainer = connect(mapStateToProps, mapDispatchToProps)(DynamicRoute);

export {DynamicRouteContainer};
