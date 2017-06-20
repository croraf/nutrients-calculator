import React from 'react';

import { Router, Route, IndexRedirect } from 'react-router';    

// For material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {enhancedHistory} from './modules/store';

import {Header} from './Header/Header';

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
                                import(/* webpackChunkName: "chunckLogin" */  './routes/Login/Login').then((Login) => { cb(null, Login.Login); });
                            }}/>

                        <Route
                            path="calculator"
                            getComponent={(nextState, cb) => {
                                import(/* webpackChunkName: "chunckCalculator" */  './routes/Calculator/CalculatorContainer').then(
                                    (CalculatorContainer) => { cb(null, CalculatorContainer.CalculatorContainer); }
                                );
                            }}/>

                        <Route
                            path="admin"
                            getComponent={(nextState, cb) => {
                                import(/* webpackChunkName: "chunckAdmin" */  './routes/Admin/Admin').then(
                                    (Admin) => { cb(null, Admin.Admin); });
                            }}/>
                    </Route>
                </Router>
            </div>
        </MuiThemeProvider>
    );
};

export {App};