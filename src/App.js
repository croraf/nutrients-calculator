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
                        path="tests"
                        getComponent={(nextState, cb) => {
                            import('./routes/Main/Main').then((Main) => { cb(null, Main.Main); });
                        }}/>

                    <Route 
                        path="playground"
                        getComponent={(nextState, cb) => {
                            import('./routes/Playground/Playground').then((Playground) => { cb(null, Playground.Playground); });
                        }}/>

                    <Route
                        path="settings"
                        getComponent={(nextState, cb) => {
                            import('./routes/Settings/Settings').then((Settings) => { cb(null, Settings.Settings); });
                        }}/>
                </div>
            </Router>
        </div>
    );
};

export {App};