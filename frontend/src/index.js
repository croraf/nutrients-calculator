
/*import styles from './styles/style1.scss';*/

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {store} from './modules/store';
import {AppContainer} from './AppContainer';



ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
