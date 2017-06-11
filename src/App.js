import React from 'react';

import { Router, Route, IndexRedirect } from 'react-router';

import {enhancedHistory} from './reducers/store';

import {Header} from './Header/Header';

const App = () => {

    return (
        <div>
            <Header />
            
            <Router history={enhancedHistory}>
                <Route path='/'>
                    <IndexRedirect to='/calculator' />

                    <Route
                        path="calculator"
                        getComponent={(nextState, cb) => {
                            import('./routes/Calculator/CalculatorContainer').then(
                                (CalculatorContainer) => { cb(null, CalculatorContainer.CalculatorContainer); }
                            );
                        }}/>

                    <Route
                        path="admin"
                        getComponent={(nextState, cb) => {
                            import('./routes/Admin/Admin').then((Admin) => { cb(null, Admin.Admin); });
                        }}/>
                </Route>
            </Router>
        </div>
    );
};

export {App};