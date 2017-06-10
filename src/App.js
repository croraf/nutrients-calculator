import React from 'react';

import { Router, Route } from 'react-router';

import {enhancedHistory} from './reducers/store';

import {Header} from './Header/Header';

const App = () => {

    return (
        <div>
            <Header />
            
            <Router history={enhancedHistory}>
                <div>
                    <Route 
                        path="main"
                        getComponent={(nextState, cb) => {
                            import('./routes/Main/Main').then((Main) => { cb(null, Main.Main); });
                        }}/>

                    <Route
                        path="calculator"
                        getComponent={(nextState, cb) => {
                            import('./routes/Calculator/Calculator').then((Calculator) => { cb(null, Calculator.Calculator); });
                        }}/>

                    <Route
                        path="admin"
                        getComponent={(nextState, cb) => {
                            import('./routes/Admin/Admin').then((Admin) => { cb(null, Admin.Admin); });
                        }}/>
                </div>
            </Router>
        </div>
    );
};

export {App};