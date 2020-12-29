import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'src/modules/store';
/* import { PrivateRoute } from './routes/util/PrivateRoute'; */
import DynamicRoute from './routes/util/DynamicRoute';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Header } from './Common/Header/Header';
import { useDispatch, useSelector } from 'react-redux';

const muiTheme = createMuiTheme({
    /* datePicker: {
        selectColor: 'orange'
    } */
});

const useStyles = makeStyles({
    '@global': {
        html: {
            backgroundColor: '#fbfbfb',
        }
    }
});


const App = () => {
    useStyles();
    const dispatch = useDispatch();
    const status = useSelector(state => state.login.status);

    // LOAD THINGS FROM LOCAL STORAGE
    useEffect(() => {
        const token = localStorage.getItem('wholeprotein_token');
        if (token) {
            const payloadEncoded = token.split('.')[1];
            const payload = JSON.parse(Buffer.from(payloadEncoded, 'base64').toString('ascii'));
            dispatch({ type: 'LOGIN_SUCCESS', name: payload.name });
        } else {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        }
    }, [dispatch]);

    const loginStatus = useSelector(state => state.login.status);


    return (
        <ThemeProvider theme={muiTheme}>
            <div style={{ minWidth: '400px' }}>
                <Header />
                <div>
                    {loginStatus === 'PENDING' ?
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%' }}>
                            {/* <RefreshIcon style={{color: 'cyan', width: '100px', height: '100px'}}/> */}
                            Loading ...
                        </div>
                        :
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route path='/' exact render={() => <Redirect to='/login' />} />
                                <Route path="/login" component={
                                    (props) => (status === 'AUTHENTICATED' ? <Redirect to='/calculator' /> : <DynamicRoute {...props} />)
                                } />
                                <Route path="/calendar" component={
                                    (props) => <DynamicRoute {...props} secure />
                                } />
                                <Route path="/calculator" component={
                                    (props) => <DynamicRoute {...props} secure />
                                } />
                                <Route path="/statistics" component={
                                    (props) => <DynamicRoute {...props} secure />
                                } />
                                <Route path="/profile" component={
                                    (props) => <DynamicRoute {...props} secure />
                                } />
                                {/* <Route path="/admin" component={AdminRoute} /> */}
                            </Switch>
                        </ConnectedRouter>
                    }
                </div>
                {/* <AdvertisementFooter /> */}
            </div>
        </ThemeProvider>
    );
};

export default App;
