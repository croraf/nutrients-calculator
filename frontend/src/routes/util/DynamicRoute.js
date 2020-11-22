import React from 'react';

const checkAuth = (props) => {

    if (!props.secure) return true;
    
    /* if ( typeof props.authorized !== 'undefined' ) {

        console.log('Needs authorization! Is authorized:', props.authorized);
        return props.authorized;
    } */

    console.log('Needs authorization!');

    console.log(localStorage.getItem('wholeprotein_token'));

    if (localStorage.getItem('wholeprotein_token')) {
        return true;
    } else {
        return false;
    }
};

const getImportingPromise = (pathname) => {
    switch (pathname) {
        case '/statistics':
            return import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/StatisticsContainer');
        case '/calculator':
            return import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/CalculatorContainer');
        case '/calendar':
            return import(/* webpackChunkName: "chunckCalendar" */  '../Calendar/CalendarContainer');
        case '/profile':
            return import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer');
        case '/login':
            return import(/* webpackChunkName: "chunckLogin" */  '../Login');
        default:
            return import(/* webpackChunkName: "chunckLogin" */  '../Login');
    }
};

class DynamicRoute extends React.Component {
    state = {
        component: (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%'}}>
                {/* <RefreshIcon style={{color: 'cyan', width: '100px', height: '100px'}}/> */}
                Loading ...
            </div>
        )
    }

    componentDidMount() {
        if (checkAuth(this.props)){
            getImportingPromise(this.props.location.pathname)
                .then((file) => {

                    console.log(file);
                    
                    const Component = file.default;
                    this.setState({
                        component: <Component />
                    });

                    if (this.props.location.pathname === '/login'   || this.props.location.pathname === '/calculator'  ) {
                        import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/CalculatorContainer');
                        import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer');
                        import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/StatisticsContainer');
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
