import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { hashHistory } from 'react-router';

import {testCaseActive} from './testCase';
import {fetchIngredientsReducer} from './ingredients';
//import {draggableListsReducer} from './draggableList';
import {nutrientsReducer} from './nutrients';
import {loginReducer} from './login';

const createReducer = (asyncReducers) => (
    combineReducers({
        login: loginReducer,
        nutrients: nutrientsReducer,
        ingredients: fetchIngredientsReducer,
        testCaseActive: testCaseActive,
        form: formReducer,
        routing: routerReducer,
        ...asyncReducers
    })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createReducer({}), 
    composeEnhancers(
        applyMiddleware(routerMiddleware(hashHistory), thunk)
    )
);
store.asyncReducers = {};

const enhancedHistory = syncHistoryWithStore(hashHistory, store);

const injectAsyncReducer = (name, asyncReducer) => {

    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer({
        ...store.asyncReducers
    }));

};

export {store, injectAsyncReducer, enhancedHistory};