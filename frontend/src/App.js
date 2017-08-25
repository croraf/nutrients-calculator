import React from 'react';

import { Router, Route, IndexRedirect } from 'react-router';    

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

const App = () => {

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
                            path="calculator"
                            getComponent={(nextState, cb) => {
                                import(/* webpackChunkName: "chunckCalculator" */  './routes/Calculator/CalculatorContainer').then(
                                    (file) => { cb(null, file.CalculatorContainer); }
                                );
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
};

export {App};
