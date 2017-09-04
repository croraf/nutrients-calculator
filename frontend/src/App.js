import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from 'modules/store';

import {PrivateRoute} from './routes/util/PrivateRoute';

import {CalculatorRoute, LoginRoute, CalendarRoute, ProfileRoute, StatisticsRoute} from './routes/util/DynamicRoutes';

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
                            
                            <Route path="/login" component={LoginRoute}/> 

                            <Route path="/calendar" component={CalendarRoute}/>

                            <Route path='/calculator' component={CalculatorRoute} />

                            <Route path="/statistics" component={StatisticsRoute}/>
                            
                            <Route path="/profile" component={ProfileRoute}/>

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
