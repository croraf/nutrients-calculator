import React from 'react';
import PropTypes from 'prop-types';


const checkAuth = (props) => {

    if (!props.secure) return true;
    
    if (typeof props.authorized !== 'undefined') {

        console.log('Needs authorization! Is authorized:', props.authorized);
        return props.authorized;
    } else {

        return true;
    }
};

const getImportingPromise = (pathname) => {
    switch (pathname) {
        case '/statistics':
            return import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/Statistics');
        case '/calculator':
            return import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/CalculatorContainer');
        case '/calendar':
            return import(/* webpackChunkName: "chunckCalendar" */  '../Calendar/CalendarContainer');
        case '/profile':
            return import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer');
        case '/login':
            return import(/* webpackChunkName: "chunckLogin" */  '../Login/LoginContainer');
        default:
            return import(/* webpackChunkName: "chunckLogin" */  '../Login/LoginContainer');
    }
};

class DynamicRoute extends React.Component {
    state = {
        component: <div>Loading</div>
    }

    componentWillMount() {
        if (checkAuth(this.props)){
            getImportingPromise(this.props.location.pathname)
                .then((file) => {

                    console.log(file);
                    
                    const Component = file.default;
                    this.setState({
                        component: <Component />
                    });

                    if (Component.WrappedComponent.name === 'Login') {
                        import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/CalculatorContainer');
                        import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer');
                        import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/Statistics');
                        import(/* webpackChunkName: "chunckCalendar" */  '../Calendar/CalendarContainer');
                    }
                });
        } else {
            this.setState({
                component: <div>Unauthorized</div>
            });
        }   
    }

    render() {
        return this.state.component;
    }
}


export {DynamicRoute};
