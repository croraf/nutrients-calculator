import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from 'modules/store';

import {PrivateRoute} from './routes/util/PrivateRoute';

import {DynamicRouteContainer} from './routes/util/DynamicRouteContainer';

// For material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


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
                    
                    <ConnectedRouter history={history}>
                        <div>
                            <Route path='/' exact render={() => (<Redirect to='/login' />)} /> 
                            
                            <Route path="/login" component={
                                (props) => <DynamicRouteContainer {...props} />
                            }  />

                            <Route path="/calendar" component={
                                (props) => <DynamicRouteContainer {...props} private/>
                            }/>

                            <Route path="/calculator" component={
                                (props) => <DynamicRouteContainer {...props} private/>
                            } />

                            <Route path="/statistics" component={
                                (props) => <DynamicRouteContainer {...props} private/>
                            } />
                            
                            <Route path="/profile" component={
                                (props) => <DynamicRouteContainer {...props} private/>
                            } />

                            {/* <Route path="/admin" component={AdminRoute} /> */}
                        </div>
                    </ConnectedRouter>

                    <AdvertisementFooter />
                </div>
            </MuiThemeProvider>
        );
    }
}

export {App};
