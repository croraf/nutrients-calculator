import React from 'react';
import PropTypes from 'prop-types';

class DynamicRoute extends React.Component {
    state = {
        component: <div>Loading</div>
    }

    componentWillMount() {
        import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/CalculatorContainer')
            .then((file) => {
                
                const Comp = file.CalculatorContainer;
                this.setState({
                    component: <Comp />
                }); 
            });
    }

    render() {
        return this.state.component;
    }
}

class CalculatorRoute extends DynamicRoute {
    componentWillMount() {
        import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/CalculatorContainer')
            .then((file) => {
                
                const Component = file.CalculatorContainer;
                this.setState({
                    component: <Component />
                }); 
            });
    }
}

class LoginRoute extends DynamicRoute {
    componentWillMount() {
        import(/* webpackChunkName: "chunckLogin" */  '../Login/LoginContainer')
            .then((file) => {
                
                const Component = file.LoginContainer;
                this.setState({
                    component: <Component />
                });

                setTimeout(() => {
                    import('../Calendar/CalendarContainer');
                    import('../Calculator/CalculatorContainer');
                    import('../Profile/ProfileContainer');
                    import('../Statistics/Statistics');
                }, 1000);
            });
    }
}

class CalendarRoute extends DynamicRoute {
    componentWillMount() {
        import(/* webpackChunkName: "chunckCalendar" */  '../Calendar/CalendarContainer')
            .then((file) => {
                
                const Component = file.CalendarContainer;
                this.setState({
                    component: <Component />
                }); 
            });
    }
}

class StatisticsRoute extends DynamicRoute {
    componentWillMount() {
        import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/Statistics')
            .then((file) => {
                
                const Component = file.Statistics;
                this.setState({
                    component: <Component />
                }); 
            });
    }
}

class ProfileRoute extends DynamicRoute {
    componentWillMount() {
        import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer')
            .then((file) => {
                
                const Component = file.ProfileContainer;
                this.setState({
                    component: <Component />
                }); 
            });
    }
}

export {LoginRoute, CalculatorRoute, CalendarRoute, ProfileRoute, StatisticsRoute};
