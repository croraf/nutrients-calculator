import React from 'react';

import { Router, Route, IndexRedirect } from 'react-router';    

// For material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {enhancedHistory} from './modules/store';

import {Header} from './Common/Header/Header';
import {AdvertisementFooter} from './Common/Advertisement/AdvertisementFooter';

const App = () => {

    return (
        <MuiThemeProvider>
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
                    </Route>
                </Router>

                <AdvertisementFooter />
            </div>
        </MuiThemeProvider>
    );
};

export {App};
