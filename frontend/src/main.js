// for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import styles from './styles/style1.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {store} from './modules/store';
import {App} from './App';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
