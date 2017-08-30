import React from 'react';

import { Router, Route, IndexRedirect, Redirect } from 'react-router';    
import {PrivateRoute} from './routes/util/PrivateRoute';

// For material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {enhancedHistory} from './modules/store';

import {Header} from './Common/Header/Header';
import {AdvertisementFooter} from './Common/Advertisement/AdvertisementFooter';

const muiTheme = getMuiTheme({
    datePicker: {
        selectColor: 'orange'
    }
});

class App extends React.Component {

    render () {
        
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    
                    <Router history={enhancedHistory}>
                        <Route path='/'>
                            <IndexRedirect to='/login' />

                            <Route
                                path="login"
                                getComponent={(nextState, cb) => {
                                    import(/* webpackChunkName: "chunckCalculator" */  './routes/Calculator/CalculatorContainer');
                                    import(/* webpackChunkName: "chunckLogin" */  './routes/Login/LoginContainer').then(
                                        (file) => { cb(null, file.LoginContainer); }
                                    );
                                }}/>

                            <Route
                                path="calendar"
                                getComponent={(nextState, cb) => {
                                    import(/* webpackChunkName: "chunckCalendar" */  './routes/Calendar/CalendarContainer').then(
                                        (file) => { cb(null, file.CalendarContainer); }
                                    );
                                }}/>

                            <Route
                                path="calculator"
                                getComponent={(nextState, cb) => {
                                    import(/* webpackChunkName: "chunckCalculator" */  './routes/Calculator/CalculatorContainer')
                                        .then( (file) => { 
                                            console.log(this.props.authed);
                                            if (this.props.authed) {
                                                cb(null, file.CalculatorContainer); 
                                            } else {
                                                cb(null, () => <Redirect to={'/login'}/>);
                                            }
                                        } );
                                }}/>

                            <Route
                                path="admin"
                                getComponent={(nextState, cb) => {
                                    import(/* webpackChunkName: "chunckAdmin" */  './routes/Admin/AdminContainer').then(
                                        (file) => { cb(null, file.AdminContainer); });
                                }}/>
                            
                            <Route
                                path="statistics"
                                getComponent={(nextState, cb) => {
                                    import(/* webpackChunkName: "chunckStatistics" */  './routes/Statistics/Statistics').then(
                                        (file) => { cb(null, file.Statistics); });
                                }}/>

                            <Route
                                path="profile"
                                getComponent={(nextState, cb) => {
                                    import(/* webpackChunkName: "chunckProfile" */  './routes/Profile/ProfileContainer').then(
                                        (file) => { cb(null, file.ProfileContainer); });
                                }}/>
                        </Route>
                    </Router>

                    <AdvertisementFooter />
                </div>
            </MuiThemeProvider>
        );
    }
}

export {App};
